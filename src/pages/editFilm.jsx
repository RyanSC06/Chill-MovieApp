import { useState, useRef, useEffect } from 'react'

import EditFilmCard from '../components/EditFilmCard';
import { useFilms } from '../hooks/useFilms';


const EditFilm = ({}) => {  
    // CONNECT TO API
    const { films, loading, createFilm, updateFilm, deleteFilm } = useFilms();


    // FORM TO EDIT/ADD
    // 1. Preparations
    const targetRef = useRef(null);
    const backRef = useRef({});
    const listRef = useRef(null)
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollBack = (filmID) => {
        const target = backRef.current[filmID];
        if (target) {
            console.log("Scrolling to:", filmID, target);
            target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    useEffect(() => {
        if (!isFirstLoad) {
            listRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end"});
        }
    }, [films]);

    const [isEditing, setIsEditing] = useState(false)

    // 2. Fields
    const [id, setID] = useState(null)
    const [filmID, setfilmID] = useState('')
    const [imgPath, setImgPath] = useState('')
    const [hImgPath, setHImgPath] = useState('')

    const [alt, setAlt] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [genre, setGenre] = useState('')

    const [isNewEpisode, setIsNewEpisode] = useState(false)
    const [isTopTen, setIsTopTen] = useState(false)
    const [isPremium, setIsPremium] = useState(false)

    const [isTrendingList, setIsTrendingList] = useState(false)
    const [isNewList, setIsNewList] = useState(false)
    const [isTopList, setIsTopList] = useState(false)


    // FORM HANDLERS
    const reset = () => {
        setID             (null)
        setfilmID         ('')
        setImgPath        ('')
        setHImgPath       ('')
        setAlt            ('')
        setTitle          ('')
        setGenre          ('')
        setRating         (0)
        setIsNewEpisode   (false)
        setIsTopTen       (false)
        setIsPremium      (false)
        setIsTrendingList (false)
        setIsNewList      (false)
        setIsTopList      (false)
    }
    
    const handleSubmit = () => {
        if (!filmID || !imgPath || !alt) {
            alert('Data film tidak lengkap!')
            return
        }

        if (films.some(film => film.filmID === filmID)) {
            if (!isEditing) {
                alert('Film dengan ID tersebut sudah ada!')
                return
            }
        }

        if (isEditing) {
            updateFilm(id, {
                filmID         : filmID,
                imgPath        : imgPath, 
                hImgPath       : hImgPath,
                alt            : alt,
                title          : title,
                genre          : genre,
                rating         : rating,
                isNewEpisode   : isNewEpisode,
                isTopTen       : isTopTen,
                isPremium      : isPremium,
                isTrendingList : isTrendingList,
                isNewList      : isNewList,
                isTopList      : isTopList,
            })
            setIsEditing(false)
            setTimeout(() => {
                handleScrollBack(filmID)
            }, 0)

        } else {
            setIsFirstLoad(false);
            createFilm ({
                filmID         : filmID,
                imgPath        : imgPath, 
                hImgPath       : hImgPath,
                alt            : alt,
                title          : title,
                genre          : genre,
                rating         : rating,
                isNewEpisode   : isNewEpisode,
                isTopTen       : isTopTen,
                isPremium      : isPremium,
                isTrendingList : isTrendingList,
                isNewList      : isNewList,
                isTopList      : isTopList,
            })
        }

        reset()
    }

    const handleEdit = (film) => {
        setID             (film.id)
        setfilmID         (film.filmID)
        setImgPath        (film.imgPath)
        setHImgPath       (film.hImgPath)
        setAlt            (film.alt)
        setTitle          (film.title)
        setGenre          (film.genre)
        setRating         (film.rating)
        setIsNewEpisode   (film.isNewEpisode   ? true : false)
        setIsTopTen       (film.isTopTen       ? true : false)
        setIsPremium      (film.isPremium      ? true : false)
        setIsTrendingList (film.isTrendingList ? true : false)
        setIsNewList      (film.isNewList      ? true : false)
        setIsTopList      (film.isTopList      ? true : false)

        setIsEditing    (true)
    }

    const handleDelete = (film) => {
        deleteFilm(film.id)
    }



    return (
        <>
        <div style={{padding: "20px"}}>
            <h1 ref={targetRef}>Film Manager</h1>
            <input
                value       = {filmID}
                type        = "text"
                onChange    = {(e) => setfilmID(String(e.target.value))}
                placeholder = "ID"
                style       = {{marginTop: "10px"}}
                disabled    = {isEditing}
            />

            <input
                value       = {imgPath}
                onChange    = {(e) => setImgPath(e.target.value)}
                placeholder = "Image Path"
                style       = {{marginTop: "10px"}}
            />

            <input
                value       = {hImgPath}
                onChange    = {(e) => setHImgPath(e.target.value)}
                placeholder = "Horizontal Image Path"
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
                value       = {genre}
                onChange    = {(e) => setGenre(e.target.value)}
                placeholder = "Genre"
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

            <div style={{display: "flex", flexDirection: "row", height: "60px", justifyContent: "space-between", margin: "40px"}}>
                <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", fontSize: "0.8em"}}>
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

                <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", fontSize: "0.8em"}}>
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

                <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", fontSize: "0.8em"}}>
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
            </div>


             <div style={{display: "flex", flexDirection: "row", height: "60px", justifyContent: "space-between", margin: "40px"}}>
                <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", fontSize: "0.8em"}}>
                    <p>New List?</p>
                    <label>
                        <input
                            type     = "radio"
                            name     = "isNewList"
                            checked  = {isNewList === true}
                            onChange = {() => setIsNewList(true)}
                        />
                        True
                    </label>

                    <label>
                        <input
                            type     = "radio"
                            name     = "isNewList"
                            checked  = {isNewList === false}
                            onChange = {() => setIsNewList(false)}
                        />
                        False
                    </label>
                </div>

                <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", fontSize: "0.8em"}}>
                    <p>Top List?</p>
                    <label>
                        <input
                            type     = "radio"
                            name     = "isTopList"
                            checked  = {isTopList === true}
                            onChange = {() => setIsTopList(true)}
                        />
                        True
                    </label>

                    <label>
                        <input
                            type     = "radio"
                            name     = "isTopList"
                            checked  = {isTopList === false}
                            onChange = {() => setIsTopList(false)}
                        />
                        False
                    </label>
                </div>

                <div style={{marginLeft: "35px", display: "flex", flexDirection: "row", fontSize: "0.8em"}}>
                    <p>Trending List?</p>
                    <label>
                        <input
                            type     = "radio"
                            name     = "isTrendingList"
                            checked  = {isTrendingList === true}
                            onChange = {() => setIsTrendingList(true)}
                        />
                        True
                    </label>

                    <label>
                        <input
                            type     = "radio"
                            name     = "isTrendingList"
                            checked  = {isTrendingList === false}
                            onChange = {() => setIsTrendingList(false)}
                        />
                        False
                    </label>
                </div>
            </div>


            <div style={{display: "flex", justifyContent: "center"}}>
                <button 
                    onClick={handleSubmit} 
                    style={{color:"white", width: "70%", height:"50px", padding: "0", marginBottom: "40px"}}>
                        {isEditing ? 'Update' : 'Add'}
                </button>

                <button 
                    onClick = {() => {reset(); setIsEditing(false)}} 
                    style={isEditing 
                            ? {color:"Red", width: "40%", height:"50px", padding: "0", margin: "0 0 40px 40px"}
                            : {display: "none"}}>
                        Cancel
                </button>
            </div>


            <ul id="filmList" style={{marginTop: "70px"}} ref={listRef}>
                { loading ? <p style={{marginTop: "40px"}}>Loading...</p> :
                    films.map((film) => (
                        <EditFilmCard 
                            key       = {film.filmID}
                            film      = {film}
                            h         = {film.imgPath!=="" ? false : true}
                            ref       = {(el) => {
                                backRef.current[film.filmID] = el;
                            }}
                            onEdit    = {(film) => {
                                handleEdit(film);
                            }} 
                            onDelete  = {(film) => {
                                handleDelete(film);
                            }}
                            onScroll  = {handleScroll}
                        />
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default EditFilm