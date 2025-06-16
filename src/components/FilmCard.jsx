const FilmCard = ({filmListElement}) => {
    return (
        <>
        <div className="film-card">
            { filmListElement.isNewEpisode ? (
                <span className="new-episode-tag">Episode Baru</span> 
            ) : null }

            { filmListElement.isTopTen ? ( 
                <span className="top-ten-tag">Top<br />10</span> 
            ) : null }

            <img src={filmListElement.imgPath} alt={filmListElement.alt} />
        </div>
        </>
    )
}

export default FilmCard

// filmListElement: {imgPath:str, alt:str, isNewEpisode:bool, isTopTen:bool}