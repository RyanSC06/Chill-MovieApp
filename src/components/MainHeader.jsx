import { Link } from 'react-router-dom'

const MainHeader = ({}) => {
    return (
        <>
        <header>
            <nav>
                <picture>
                    <source 
                    media="(orientation: landscape)"
                    srcSet="/images/logo.png" />
                    <source 
                    media="(orientation: portrait)"
                    srcSet="/images/logo-icon.png" />
                    
                    <img src="../../vanila/images/logo.png" style={{height: "5vh", width: "auto"}} />
                </picture>
                
                <ul>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Daftar Saya</a></li>
                </ul>

                <div className="dropdown">
                    <img src="/images/avatar.png" alt="Avatar" className="avatar" />
                    <span className="arrow">▼</span>
                    <div className="dropdown-content">
                        <a href="#"><i className="fas fa-user"></i> Profil Saya</a>
                        <a href="#"><i className="fas fa-star"></i> Ubah Premium</a>
                        <Link to="/"><i className="fas fa-sign-out-alt"></i> Keluar</Link>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default MainHeader