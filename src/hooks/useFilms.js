import { useState, useEffect } from "react";
import api from "../services/api/axiosInstance";

export const useFilms = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFilms = async () => {
        try {
            const res = await api.get("/films");
            setFilms(res.data);
        } catch (err) {
            console.error("Failed to fetch films:", err);
        } finally {
            setLoading(false);
        }
    };

    const createFilm = async (newFilm) => {
        try {
            await api.post("/films", newFilm);
            await fetchFilms();
        } catch (err) {
            console.error("Failed to create film:", err);
        }
    };

    const updateFilm = async (id, updatedFilm) => {
        try {
            await api.put(`/films/${id}`, updatedFilm);
            await fetchFilms();
        } catch (err) {
            console.error("Failed to update film:", err);
        }
    };

    const deleteFilm = async (id) => {
        try {
            await api.delete(`/films/${id}`);
            await fetchFilms();
        } catch (err) {
            console.error("Failed to delete film:", err);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return { films, loading, createFilm, updateFilm, deleteFilm };
};