import { useState, useRef } from 'react'

import EditFilmCard from '../components/EditFilmCard';
import useFilmStore from '../store/FilmStore'

import "../style/editfilm.css"

const EditFilm = ({}) => {
    const targetRef = useRef(null);

    const { continueList, topList, trendingList, newList, 
            addFilm, updateFilm, deleteFilm } = useFilmStore();

    const [isEditing, setIsEditing] = useState(false)

    const [filmID, setFilmID] = useState('')
    const [imgPath, setImgPath] = useState('')
    const [alt, setAlt] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [isNewEpisode, setIsNewEpisode] = useState(false)
    const [isTopTen, setIsTopTen] = useState(false)
    const [isPremium, setIsPremium] = useState(false)
    const [targetList, setTargetList] = useState('topList')

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = () => {
        if (!filmID || !imgPath || !alt) {
            alert('Data film tidak lengkap!')
            return
        }

        if (isEditing) {
            updateFilm(filmID, {
                filmID       : filmID,
                imgPath      : imgPath, 
                alt          : alt,
                title        : title,
                rating       : rating,
                isNewEpisode : isNewEpisode,
                isTopTen     : isTopTen,
                isPremium    : isPremium
            }, targetList)
            setIsEditing(false)
        } else {
            addFilm ({
                filmID       : filmID,
                imgPath      : imgPath, 
                alt          : alt,
                title        : title,
                rating       : rating,
                isNewEpisode : isNewEpisode,
                isTopTen     : isTopTen,
                isPremium    : isPremium
            }, targetList)
        }

        setFilmID       ('')
        setImgPath      ('')
        setAlt          ('')
        setTitle        ('')
        setRating       (0)
        setIsNewEpisode (false)
        setIsTopTen     (false)
        setIsPremium    (false)
        setTargetList   ('topList')
    }

    const handleEdit = (film) => {
        setFilmID       (film.filmID)
        setImgPath      (film.imgPath)
        setAlt          (film.alt)
        setTitle        (film.title)
        setRating       (film.rating)
        setIsNewEpisode (film.isNewEpisode ? true : false)
        setIsTopTen     (film.isTopTen     ? true : false)
        setIsPremium    (film.isPremium    ? true : false)
        setTargetList   (film.parentListId)

        setIsEditing    (true)
    }

    const handleDelete = (film) => {
        deleteFilm(film.filmID, film.parentListId)
    }

    return (
        <>
        <div className={"film-manager"}>
            <h1 ref={targetRef}>Film Manager</h1>
            <input
                value       = {filmID}
                onChange    = {(e) => setFilmID(e.target.value)}
                placeholder = "ID"
                style       = {{marginTop: "10px"}}
            />

            <input
                value       = {imgPath}
                onChange    = {(e) => setImgPath(e.target.value)}
                placeholder = "Image Path"
                style       = {{marginTop: "10px"}}
            />

            <input
                value       = {alt}
                onChange    = {(e) => setAlt(e.target.value)}
                placeholder = "Alt"
                style       = {{marginTop: "10px"}}
            />

            <input
                value       = {title}
                onChange    = {(e) => setTitle(e.target.value)}
                placeholder = "Title"
                style       = {{marginTop: "10px"}}
            />

            <input
                value       = {rating}
                onChange    = {(e) => setRating(e.target.value)}
                placeholder = "Rating"
                type        = "number"
                min         = "0"
                max         = "5"
                style       = {{marginTop: "10px"}}
            />

            <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", height: "60px", marginTop: "40px", fontSize: "0.8em"}}>
                <p>New Episode Tag?</p>
                <label>
                    <input
                        type     = "radio"
                        name     = "isNewEpisode"
                        checked  = {isNewEpisode === true}
                        onChange = {() => setIsNewEpisode(true)}
                    />
                    True
                </label>

                <label>
                    <input
                        type     = "radio"
                        name     = "isNewEpisode"
                        checked  = {isNewEpisode === false}
                        onChange = {() => setIsNewEpisode(false)}
                    />
                    False
                </label>
            </div>

            <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", height: "60px", marginTop: "5px", fontSize: "0.8em"}}>
                <p>Top Ten Tag?</p>
                <label>
                    <input
                        type     = "radio"
                        name     = "isTopTen"
                        checked  = {isTopTen === true}
                        onChange = {() => setIsTopTen(true)}
                    />
                    True
                </label>

                <label>
                    <input
                        type     = "radio"
                        name     = "isTopTen"
                        checked  = {isTopTen === false}
                        onChange = {() => setIsTopTen(false)}
                    />
                    False
                </label>
            </div>

            <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", height: "60px", marginTop: "5px", fontSize: "0.8em"}}>
                <p>Premium Tag?</p>
                <label>
                    <input
                        type     = "radio"
                        name     = "isPremium"
                        checked  = {isPremium === true}
                        onChange = {() => setIsPremium(true)}
                    />
                    True
                </label>

                <label>
                    <input
                        type     = "radio"
                        name     = "isPremium"
                        checked  = {isPremium === false}
                        onChange = {() => setIsPremium(false)}
                    />
                    False
                </label>
            </div>


            <button 
                onClick={handleSubmit} 
                style={{color:"white", marginTop: "10px", width: "70%", height:"50px", padding: "0", marginBottom: "40px"}}>
                    {isEditing ? 'Update' : 'Add'}
            </button>


            <h3 style={{fontSize: "1.5em", marginTop: "30px"}}>Melanjutkan Tonton Film</h3>
            <ul id="continueList">
                {continueList.map((film) => (
                    <EditFilmCard 
                        film      = {film}
                        onEdit    = {(filmData) => {
                            handleEdit({...filmData, parentListId: 'continueList'})
                        }} 
                        onDelete  = {(filmID) => {
                            handleDelete({filmID, parentListId: 'continueList'})
                        }}
                        onScroll  = {handleScroll}
                    />
                ))}
            </ul>

            <h3 style={{fontSize: "1.5em", marginTop: "30px"}}>Top Rating Film dan Series Hari Ini</h3>
            <ul id="topList">
                {topList.map((film) => (
                    <EditFilmCard 
                        film      = {film}
                        onEdit    = {(filmData) => {
                            handleEdit({...filmData, parentListId: 'topList'})
                        }} 
                        onDelete  = {(filmID) => {
                            handleDelete({filmID, parentListId: 'topList'})
                        }}
                        onScroll  = {handleScroll}
                    />
                ))}
            </ul>

            <h3 style={{fontSize: "1.5em", marginTop: "30px"}}>Film Trending</h3>
            <ul id="trendingList">
                {trendingList.map((film) => (
                    <EditFilmCard 
                        film      = {film}
                        onEdit    = {(filmData) => {
                            handleEdit({...filmData, parentListId: 'trendingList'})
                        }}  
                        onDelete  = {(filmID) => {
                            handleDelete({filmID, parentListId: 'trendingList'})
                        }}
                        onScroll  = {handleScroll}
                    />
                ))}
            </ul>

            <h3 style={{fontSize: "1.5em", marginTop: "30px"}}>Rilis Baru</h3>
            <ul id="newList">
                {newList.map((film) => (
                    <EditFilmCard 
                        film      = {film}
                        onEdit    = {(filmData) => {
                            handleEdit({...filmData, parentListId: 'newList'})
                        }} 
                        onDelete  = {(filmID) => {
                            handleDelete({filmID, parentListId: 'newList'})
                        }}
                        onScroll  = {handleScroll}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

export default EditFilm