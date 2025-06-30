import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { continueFilmList, topFilmList, trendingFilmList, newFilmList } from '../constants'

const useFilmStore = create ( 
    persist ((set, get) => ({
        continueList: continueFilmList,
        topList: topFilmList,
        trendingList: trendingFilmList,
        newList: newFilmList,

        // ADD
        addFilm: (film, list) =>
            set((state) => ({
                [list]: [{
                    filmID       : film.id,
                    imgPath      : film.imgPath, 
                    alt          : film.alt,
                    title        : film.title,
                    rating       : film.rating,
                    isNewEpisode : film.isNewEpisode,
                    isTopTen     : film.isTopTen,
                    isPremium    : film.isPremium
                }, ...state[list]]
            })), 

        // UPDATE
        updateFilm: (id, data, list) =>
            set((state) => ({
                [list]: state[list].map((film) => 
                    film.filmID === id ? {...film, ...data} : film)
            })),

        // DELETE
        deleteFilm: (id, list) =>
            set((state) => ({
                [list]: state[list].filter((film) => 
                    film.filmID !== id)
            }))
    }),
    {
        name: 'film-storage',
    })
)

export default useFilmStore