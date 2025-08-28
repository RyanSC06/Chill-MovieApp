import { useState, useEffect } from "react";
import api from "../services/api/axiosInstance";

export const useUser = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserById = async (id) => {
        try {
            const res = await api.get(`/users/${id}`);
            setUser(res.data);
        } catch (err) {
            console.error("Failed to fetch user by ID:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchUserById(id);
        } else {
            setLoading(false);
        }
    }, [id]);

    return { user, loading, fetchUserById };
}