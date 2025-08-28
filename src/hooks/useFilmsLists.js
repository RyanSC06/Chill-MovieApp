import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { useFilms } from "./useFilms";

export const useFilmsLists = (id) => {
    const [lists, setLists] = useState({
        continueList : [],
        topList      : [],
        trendingList : [],
        newList      : [],
    });

    const { user, userLoading } = useUser(id);
    const { films, filmLoading } = useFilms();

    useEffect(() => {
        try {
            setLists({
                continueList : user ? films.filter(m => user.continueList.includes(m.id)) : [],
                topList      : films.filter(m => m.isTopList),
                trendingList : films.filter(m => m.isTrendingList),
                newList      : films.filter(m => m.isNewList),
            });
        } catch (err) {
            console.error("Error fetching movies:", err);
        }
    }, [user, films, userLoading, filmLoading]);


    return { lists, loading: userLoading || filmLoading };
}