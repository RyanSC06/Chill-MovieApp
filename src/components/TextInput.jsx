const TextInput = ({description, id, type, placeholder, styleDict=null, value, onChange}) => {
    return (
        <>
        <div className="input">
            <p>{description}</p>
            <input
                required
                type        = {type}
                id          = {id}
                placeholder = {placeholder}
                style       = {styleDict || {}}
                value       = {value}
                onChange    = {onChange}
            />
        </div>
        </>
    )
}

export default TextInput