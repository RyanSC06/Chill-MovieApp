const TextInput = ({description, id, type, placeholder, styleDict=null}) => {
    return (
        <>
        <div className="input">
            <p>{description}</p>
            <input type={type} id={id} placeholder={placeholder} 
                style={styleDict === null ? {} : styleDict} required />
        </div>
        </>
    )
}

export default TextInput