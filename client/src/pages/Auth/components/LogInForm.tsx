import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import type { IAuthForm } from "../../../types/authProps"; 
import { useRegister } from "../../../utilities/customHooks/useRegister";

import { EvenLopIcon } from "../../../components/UI/Icons/EvenlopIcon";
import { EyeIcon } from "../../../components/UI/Icons/EyeIcon";
import { GoogleLogoIcon } from "../../../components/UI/Icons/GoogleLogoIcon";
import { CloseIcon } from "../../../components/UI/Icons/CloseIcon";

interface LoginFormProps {
    onSuccess: (email: string) => void;
    onClose: () => void;
    onSwitchMode: () => void;
}

const LoginForm = ({ onSuccess, onClose, onSwitchMode }: LoginFormProps) => {

    const [showPassword, setShowPassword] = useState(false);
    
    const { register, handleSubmit, formState: { errors } } = useForm<IAuthForm>({
        mode: "onBlur",   
        reValidateMode: "onBlur"  
    });

    // Тут, скоріше за все, в майбутньому буде useLogin замість useRegister
    const { handleRegister, serverError, isLoading } = useRegister(onSuccess);

    const onSubmit: SubmitHandler<IAuthForm> = async (data) => {
        // Заміни на функцію логіну, коли вона буде готова
        await handleRegister(data); 
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="w-[440px] h-auto p-8 bg-[#D3DCF8] rounded relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div onClick={onClose} className="flex absolute right-8 top-5 cursor-pointer w-fit">
                    <CloseIcon />
                </div>
                
                <h2 className="text-[#2E78E5] font-semibold text-[26px] text-center mb-5 leading-[130%]">Log In</h2>
                
                <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="flex flex-col gap-5">
                    
                    <label className="flex flex-col text-[#696969]">
                        Enter Your Email
                        <div className="relative w-full">
                            <input 
                                {...register("email", {
                                    required: true,
                                    pattern : {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })} 
                                className="bg-white w-full text-black pr-[40px] rounded py-1"
                                type="email" 
                            />
                            <div className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none">
                                <EvenLopIcon/>
                            </div>
                        </div>
                    </label>
                    {serverError && <p className="text-red-400 mt-[-15px] text-sm">Invalid credentials</p>}
                    {errors.email?.type === 'required' && <p className="text-red-400 mt-[-15px] text-sm">Email is required</p>}
                    {errors.email?.type === 'pattern' && <p className="text-red-400 mt-[-15px] text-sm">{errors.email.message}</p>}
                    
                    <div className="flex flex-col gap-1">
                        <label className="text-[#696969]">
                            Enter Your Password
                            <div className="relative w-full">
                                <input 
                                    {...register("password", {
                                        required: "The field is required", 
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters"
                                        }
                                    })} 
                                    className="bg-white w-full text-black pr-[40px] rounded py-1"
                                    type={showPassword ? "text" : "password"}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
                                >
                                    <EyeIcon/>
                                </button>
                            </div>
                        </label>
                        {errors.password && <p className="text-red-400 mt-[3px] text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="text-center mt-2">
                        <span className="text-[#696969] leading-[130%]">or continue with</span>

                        <button
                            type="button"
                            className="flex items-center justify-center border py-2.5 rounded mt-5 cursor-pointer bg-white hover:opacity-70 w-full"
                        >
                            <GoogleLogoIcon/>
                            <span className="ml-2">Google</span>
                        </button>
                    </div>

                    <div className="text-center mt-1">
                        <span className="text-[#2E78E5] text-sm cursor-pointer hover:underline">
                            Forgot your password?
                        </span>
                    </div>

                    <button 
                        type="submit" 
                        className="bg-[#EA4300] text-white py-3 w-full cursor-pointer hover:opacity-80 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? "..." : "Log In"}
                    </button>

                    <div className="text-center flex flex-col">
                        <span className="leading-[130%] text-[#696969] py-3">New here?</span>
                        <button 
                            type="button"
                            onClick={onSwitchMode}
                            className="py-3 text-center bg-[#2E78E5] cursor-pointer text-white hover:opacity-75"
                        >
                            Create an account
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default LoginForm;