const WelcomeTitle = ({logoPath, logoStyleDict, title, subtitle}) => {
    return (
        <>
        <img src={logoPath} style={logoStyleDict} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        </>
    )
}

export default WelcomeTitle