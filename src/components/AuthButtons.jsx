const AuthButtons = ({primaryText, secondaryText}) => {
    return (
        <>
        <div className="login">
            <button type="submit">{primaryText}</button>
            <p>Atau</p>
            <button style={{backgroundColor: 'transparent'}}>
                <img src="/images/google-logo.png" style={{width: '3%', marginRight:'10px'}} />
                <span style={{alignItems: 'center'}}>{secondaryText}</span>
            </button>
        </div>
        </>
    )
}

export default AuthButtons