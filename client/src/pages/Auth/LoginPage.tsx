import type { IAuthForm } from "../../types/authProps";
import {useForm, type SubmitHandler} from "react-hook-form"

const LoginPage = () => {
    
    const {register, handleSubmit, formState : {errors}} = useForm<IAuthForm>({
        mode : "onTouched",
    })

    const onSubmit : SubmitHandler<IAuthForm> = (data) => console.log(data);

    return (
        <div className="text-center mt-10 gap-4 mb-10">
            <h2>Login Page</h2>

            <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="flex flex-col gap-3">
                <label>
                    Enter Your Email
                    <input {...register ( "email", {
                        required : true,
                         pattern : {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    }
                )}
                     className="border-2 ml-2" type="email" />
                </label>
                {errors.email?.type === "required" && <p className="text-red-400">Email is required</p>}
                {errors.email?.type === "pattern" && <p className="text-red-400">{errors.email.message}</p>}
                <label>
                    Enter Your Password
                    <input {...register ("password", {
                        required: true,
                        minLength : 6,
                    })}
                        className="border-2 ml-2" type="password" />
                </label>
                {errors.password?.type === "required" && <p className="text-red-400">Password is required</p>}
                {errors.password?.type === "minLength" && <p className="text-red-400">Minimum 6 characters</p>}
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginPage;