import {useForm} from "react-hook-form"
import { useTimer } from "../../../utilities/customHooks/useTimer"
import { useState } from "react";
import { axiosInstance } from "../../../api/axiosInstance";

interface IVerifyingForm {
    code : string;
}

const VerifyEmailModal = ({email, onSuccess}: {email: string; onSuccess: () => void}) => {
    const {seconds, isActive, startTimer} = useTimer(60);
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<IVerifyingForm>({
        mode: "onTouched"
    })

    const onSubmit = async (data: IVerifyingForm) => {
    try {
        setIsLoading(true);
        await axiosInstance.post("/auth/verify-email", {
            email,
            code: data.code
        });

        onSuccess();
    } catch (error) {
        console.error("Verification failed", error);
    } finally {
        setIsLoading(false);
    }
};

    return (
        <div>
            <h2 className="text-center text-xl mb-4">Verify Your Email</h2>
            <p className="text-center mb-4">A verification code has been sent to {email}. Please enter it below.</p>
            <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="flex flex-col gap-3">
                <label htmlFor="code">Verification Code</label>
                 <input {...register("code", {
                        required: "Verification code is required",
                        pattern: {
                            value: /^\d{6}$/,
                            message: "Code must be 6 digits"
                        }
                    })} 
                    id="code"
                    className="border-2 ml-2" 
                    type="text" 
                    maxLength={6}
                />
                {errors.code?.type === "required" && <p className="text-red-400">{errors.code.message}</p>}
                {errors.code?.type === "pattern" && <p className="text-red-400">{errors.code.message}</p>}
                
                <div>
                    {isLoading ? (
                        <p className="text-gray-500">Verifying...</p>
                    ) : (
                        <button 
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                            disabled={isLoading}
                            >
                            Verify
                        </button>
                    )}
                </div>

                <div>
                    {isActive ? (
                        <p className="text-gray-500">You can resend the code in {seconds} seconds</p>
                    ) : (
                        <button 
                        type="button" 
                        onClick={startTimer} 
                        className="text-blue-500"
                        >
                            Resend Code
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default VerifyEmailModal;