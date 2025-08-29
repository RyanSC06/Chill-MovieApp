const FilmCard = ({filmListElement}) => {
    return (
        <>
        <div className="film-card">
            { filmListElement.isNewEpisode && filmListElement.isPremium ? (
                <div className="tags-wrapper">
                    <span className="new-episode-tag lower-tag">Episode Baru</span> 
                    <span className="premium-tag upper-tag">Premium</span>
                </div>
              ) : filmListElement.isNewEpisode ? (
                    <span className="new-episode-tag upper-tag">Episode Baru</span>
              ) : filmListElement.isPremium ? (
                    <span className="premium-tag upper-tag">Premium</span> 
              )  : null }

            { filmListElement.isTopTen ? ( 
                <span className="top-ten-tag">Top<br />10</span> 
            ) : null }

            <img src={filmListElement.imgPath} alt={filmListElement.alt} />
        </div>
        </>
    )
}

export default FilmCard

// filmListElement: {imgPath:str, alt:str, isNewEpisode:bool, isTopTen:bool, isPremium:bool}