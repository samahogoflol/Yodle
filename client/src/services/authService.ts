import { axiosInstance } from "../api/axiosInstance";
import type { IAuthForm } from "../types/authProps"

export const authService = {
    register: async (data: IAuthForm) => {
        const response = await axiosInstance.post("auth/register", data);
        return response.data;
    },
    login: async (data: IAuthForm) => {
        const response = await axiosInstance.post("auth/login", data);
        if (response.data.token) {
            localStorage.setItem("token", response.data.token); 
        }
        return response.data;
    },

    verify: async (email: string, code: string) => {
        const response = await axiosInstance.post("auth/verify", { email, code });
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        return response.data;
    }
};