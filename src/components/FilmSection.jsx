import { useRef } from "react"

import FilmCard from "./FilmCard"
import FilmCardHorizontal from "./FilmCardHorizontal"

const loopList = (filmList, isHorizontal) => {
    if (!isHorizontal) {
        return (
            <>
            {filmList.map((filmListElement, index) => {
                return (<FilmCard 
                    key={index} 
                    filmListElement={filmListElement}
                />)
            })}
            </>
        )
    } else {
        return (
            <>
            {filmList.map((filmListElementHorizontal, index) => {
                return (<FilmCardHorizontal 
                    key={index} 
                    filmListElementHorizontal={filmListElementHorizontal}
                />)
            })}
            </>
        )
    }
}

const FilmSection = ({sectionName, filmList, isHorizontal=false}) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    
    return (
        <>
        <section style={{marginTop: "50px"}}>
            <h2>{sectionName}</h2>
            <div className="slider-wrapper">
                <button className="slide-btn left" onClick={scrollLeft}><b>&lt;</b></button>
                <div className="film-slider" ref={sliderRef}>
                    {loopList(filmList, isHorizontal)}
                </div>
                <button className="slide-btn right" onClick={scrollRight}><b>&gt;</b></button>
            </div>
        </section>
        </>
    )
}

export default FilmSection

// isHorizontal = false => filmList: [{imgPath:str, alt:str, isNewEpisode:bool, isTopTen:bool}]
// isHorizontal = true => filmList: [{imgPath:str, alt:str, title:str, rating:float}]