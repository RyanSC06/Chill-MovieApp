const FeatureSection = ({imgPath, title, description, minAge}) => {
    return (
        <>
        <section className="featured" style = {{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1)), url(${imgPath})`
        }}>
            <div className="featured-content">
                <div className="featured-text">
                    <h2 className="ellipsis1">{title}</h2>
                    <p className="ellipsis3">{description}</p>
                </div>

                <div className="seperate-positioning">
                    <div className="featured-buttons">
                        <button style={{backgroundColor: "#0F1E93", padding: "10px 30px"}}>Mulai</button>
                        <button style={{backgroundColor: "#22282A", width: "fit-content"}}><div className="circle-warning"><i className="fas fa-exclamation"></i></div>Selengkapnya</button>
                        <span>{minAge}+</span>
                    </div>
                    <div className="sound-control">
                        <button id="volume"><i className="fas fa-volume-up"></i></button>
                    </div>  
                </div>
            </div>   
        </section>
        </>
    )
}

export default FeatureSection