const EditFilmCard = ({film, onEdit, onDelete, onScroll}) => {
    return (
        <>
        <li key={film.filmID} 
            style={{display: "flex", flexDirection: "row", justifyContent: "space-between", 
            marginTop: "20px", alignItems: "center", backgroundColor: "#2F3334",
            border: "1px solid", borderRadius: "20px", borderColor: "#E7E3FC3B",
            padding: "5%"}}>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: "flex-start"}}>
                <p>{film.filmID}</p>
                <p>{film.title}</p>
                <img src={film.imgPath} style={{width: '150px'}} />
            </div>
            
            <div style={{display: "flex", flexDirection: "row", height: "50%"}}>
                <button onClick={() => (onEdit(film), onScroll())} style={{marginRight: "5px"}}>✏️</button>
                <button onClick={() => onDelete(film.filmID)}>🗑️</button>
            </div>
        </li>
        </>
    )
}

export default EditFilmCard