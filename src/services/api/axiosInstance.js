import axios from "axios";
import { getToken } from "../auth/authService.js";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("Unauthorized! Token mungkin expired atau invalid.");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        if (error.response.status === 403) {
            console.warn("Forbidden! Anda tidak punya akses.");
        }

        return Promise.reject(error);
    }
);

export default api;
