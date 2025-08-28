const EditFilmCard = ({film, h, ref, onEdit, onDelete, onScroll}) => {
    return (
        <>
        <li key={film.filmID} ref={ref}
            style={{display: "flex", flexDirection: "row", justifyContent: "space-between", 
            marginTop: "20px", alignItems: "center", backgroundColor: "#2F3334",
            border: "1px solid", borderRadius: "20px", borderColor: "#E7E3FC3B",
            padding: "2%"}}>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: "flex-start"}}>
                <p>{film.filmID}</p>
                <p>{film.title}</p>
                <img src={h ? film.hImgPath : film.imgPath} style={{width: '150px'}} />
            </div>
            
            <div style={{display: "flex", flexDirection: "row", height: "50%"}}>
                <button onClick={() => (onEdit(film), onScroll())} style={{marginRight: "10px"}}>✏️</button>
                <button onClick={() => onDelete(film)}>🗑️</button>
            </div>
        </li>
        </>
    )
}

export default EditFilmCard