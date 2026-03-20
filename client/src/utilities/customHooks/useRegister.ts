import { useState } from "react";
import { authService } from "../../services/authService";
import type { IAuthForm } from "../../types/authProps";

export const useRegister = (onSuccess: (email: string) => void) => {
    const [serverError, setServerError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (data: IAuthForm) => {
        setIsLoading(true);
        setServerError(null);
        try {
            await authService.register(data);
            onSuccess(data.email);
        } catch (error: any) {
            setServerError(error.response?.status === 409 ? "Email already taken" : "Registration failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { handleRegister, serverError, isLoading };
};