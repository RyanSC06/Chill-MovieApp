const FilmCardHorizontal = ({filmListElementHorizontal}) => {
    return (
        <>
        <div className="film-card-horizontal">
            <span className="horizontal-desc-tag">
                <p className="hor-ellipsis"><b>{filmListElementHorizontal.title}</b></p>
                <p className="hor-rating"><i className="fas fa-star"></i>
                    &nbsp;&nbsp;{filmListElementHorizontal.rating.toString()}/5
                </p>
            </span>
            <img src={filmListElementHorizontal.imgPath} alt={filmListElementHorizontal.alt} />
        </div>
        </>
    )
}

export default FilmCardHorizontal

// filmListElementHorizontal: {imgPath:str, alt:str, title:str, rating:float}