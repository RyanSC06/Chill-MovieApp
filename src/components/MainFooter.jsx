import '../style/home.css'

const MainFooter = ({}) => {
    return (
        <>
        <footer>
            <div className="TM">
                <img src="/src/assets/images/logo.png" style={{height: "50px", width: "auto"}} />
                <p style={{color: "#C1C2C4"}}>@2023 Chill All Rights Reserved.</p>
            </div>
            
            <div className="genre">
                <p className="subtitle"><b>Genre</b></p>
                <div className="option-dropdown">
                    <button className="toggle">
                        <p>Genre</p>
                        <p>{'>'}</p>
                    </button>
                    <div className="option-dropdown-content">
                        <a href="#">Aksi</a>
                        <a href="#">Anak-anak</a>
                        <a href="#">Anime</a>
                        <a href="#">Britania</a>
                        <a href="#">Drama</a>
                        <a href="#">Fantasi Ilmiah & Fantasi</a>
                        <a href="#">Kejahatan</a>
                        <a href="#">KDrama</a>
                        <a href="#">Komedi</a>
                        <a href="#">Petualangan</a>
                        <a href="#">Perang</a>
                        <a href="#">Romantis</a>
                        <a href="#">Sains & Alam</a>
                        <a href="#">Thriller</a>
                    </div>
                </div>
                <div className="category">
                    <div className="sub-category">
                        <a href="#">Aksi</a>
                        <a href="#">Anak-anak</a>
                        <a href="#">Anime</a>
                        <a href="#">Britania</a>
                    </div>

                    <div className="sub-category">
                        <a href="#">Drama</a>
                        <a href="#">Fantasi Ilmiah & Fantasi</a>
                        <a href="#">Kejahatan</a>
                        <a href="#">KDrama</a>
                    </div>

                    <div className="sub-category">
                        <a href="#">Komedi</a>
                        <a href="#">Petualangan</a>
                        <a href="#">Perang</a>
                        <a href="#">Romantis</a>
                    </div>

                    <div className="sub-category">
                        <a href="#">Sains & Alam</a>
                        <a href="#">Thriller</a>
                    </div>
                </div>
            </div>

            <div className="genre" style={{marginRight: "2%"}}>
                <p className="subtitle"><b>Help</b></p>
                <div className="option-dropdown">
                    <button className="toggle">
                        <p>Help</p>
                        <p>{'>'}</p>
                    </button>
                    <div className="option-dropdown-content">
                        <a href="#">FAQ</a>
                        <a href="#">Kontak Kami</a>
                        <a href="#">Privasi</a>
                        <a href="#">Syarat & Ketentuan</a>
                    </div>
                </div>
                <div className="help-category">
                    <a href="#">FAQ</a>
                    <a href="#">Kontak Kami</a>
                    <a href="#">Privasi</a>
                    <a href="#">Syarat & Ketentuan</a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default MainFooter