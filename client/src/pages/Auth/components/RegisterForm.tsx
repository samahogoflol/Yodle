import {useForm, type SubmitHandler} from "react-hook-form"
import type { IAuthForm } from "../../../types/authProps";
import { useRegister } from "../../../utilities/customHooks/useRegister";

interface RegisterFormProps {
    onSuccess: (email: string) => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm<IAuthForm>({
        mode: "onTouched"
    })

    const {handleRegister, serverError, isLoading} = useRegister(onSuccess);

    const onSubmit: SubmitHandler<IAuthForm> = async (data) => {
        await handleRegister(data);
    };

    return (
         <div className="text-center mt-10 gap-4 mb-10">
            <h2>Register Page</h2>

            <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="flex flex-col gap-3">
                <label>Enter Your Email
                    <input {...register ("email", {
                        required: true,
                        pattern : {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                        })} 
                        className="border-2 ml-2"
                        type="email" 
                    />
                </label>
                {serverError && <p className="text-red-400">{"  This email is already taken"}</p>}
                {errors.email?.type === 'required' && <p className="text-red-400">Email is required</p>}
                {errors.email?.type === 'pattern' && <p className="text-red-400">{errors.email.message}</p>}

                <label>Enter Your Phone Number
                    <input {...register ("phoneNumber", {
                        required: true,
                        pattern : {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number"
                        }
                        })} 
                        className="border-2 ml-2"
                        type="tel" 
                    />
                </label>
                {errors.phoneNumber?.type === "required" && <p className="text-red-400">Phone number is required</p>}
                {errors.phoneNumber?.type === "pattern" && <p className="text-red-400">{errors.phoneNumber.message}</p>}

               <label>Enter Your Password
                    <input {...register ("password", {
                        required: true, 
                        minLength: 6
                        })} 
                        className="border-2 ml-2" 
                        type="password"
                    />
                </label>
                {errors.password?.type === 'required' && <p className="text-red-400">The field is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-400">Minimum 6 characters</p>}

                <label>Enter Your First Name
                    <input {...register ("firstName", {
                        required: true,
                        minLength : 2,
                            pattern : {
                                value: /^[A-Za-z]+$/i,
                                message: "First name should contain only letters"
                            }
                        })} 
                        className="border-2 ml-2" type="text" />
                </label>
                {errors.firstName?.type === 'required' && <p className="text-red-400">First name is required</p>}
                {errors.firstName?.type === "minLength" && <p className="text-red-400">Minimum 2 characters</p>}
                {errors.firstName?.type === "pattern" && <p className="text-red-400">{errors.firstName.message}</p>}

                <label>Enter Your Last Name
                    <input {...register ("lastName", {
                        required: true,
                        minLength : 2,
                            pattern : {
                                value: /^[A-Za-z]+$/i,
                                message: "Last name should contain only letters"
                            }
                        })} 
                        className="border-2 ml-2" type="text" />
                </label>
                {errors.lastName?.type === 'required' && <p className="text-red-400">Last name is required</p>}
                {errors.lastName?.type === "minLength" && <p className="text-red-400">Minimum 2 characters</p>}
                {errors.lastName?.type === "pattern" && <p className="text-red-400">{errors.lastName.message}</p>}

                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 px-4 rounded w-[20%] m-auto cursor-pointer hover:bg-blue-600"
                    disabled={isLoading}
                >
                    {isLoading ? "Registering..." : "Register"}
                </button>

            </form>
        </div>
    )
}


export default RegisterForm;