import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../style/login-register.css'

import TextInput from '../components/TextInput.jsx'
import WelcomeTitle from '../components/WelcomeTitle.jsx';
import AuthButtons from '../components/AuthButtons.jsx'

function Register() {
    useEffect(() => {
        document.body.style.backgroundImage = "url('/images/seats-background.jpeg')"
    }, []);

    return (
        <>
        <div className="container">
            <WelcomeTitle logoPath="/images/logo.png" logoStyleDict={{width: '50%', height: '50%'}}
                title="Daftar" subtitle="Selamat datang!"/>

            <form id="register-form">
                <TextInput description="Username" id="usernameInput" type="text" 
                    placeholder="Masukkan username" styleDict={{marginBottom: '30px'}}/>

                <TextInput description="Kata Sandi" id="passwordInput" type="password" 
                    placeholder="Masukkan kata sandi" styleDict={{marginBottom: '30px'}}/>

                <TextInput description="Konfirmasi Kata Sandi" id="confirmPasswordInput" type="password" 
                    placeholder="Konfirmasi kata sandi"/>

                <div className="details">
                    <p>Sudah punya akun? <Link to="/">Masuk</Link></p>
                </div>
                
                <AuthButtons primaryText="Daftar" secondaryText="Daftar dengan Google" />
            </form>
        </div>
        </>
    )
}

export default Register