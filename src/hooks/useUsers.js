import { useState, useEffect } from "react";
import api from "../services/api/axiosInstance";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const res = await api.get("/users");
            setUsers(res.data);
        } catch (err) {
            console.error("Failed to fetch users:", err);
        } finally {
            setLoading(false);
        }
    };

    const createUser = async (newUser) => {
        try {
            const res = await api.post("/users", newUser);
            await fetchUsers();
            return (res.data);
        } catch (err) {
            console.error("Failed to create user:", err);
        }
    };

    const updateUser = async (id, updatedUser) => {
        try {
            await api.put(`/users/${id}`, updatedUser);
            await fetchUsers();
        } catch (err) {
            console.error("Failed to update user:", err);
        }
    };

    const deleteUser = async (id) => {
        try {
            await api.delete(`/users/${id}`);
            await fetchUsers();
        } catch (err) {
            console.error("Failed to delete user:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, createUser, updateUser, deleteUser };
};