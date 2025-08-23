import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/login-register.css'
import '../style/registerbg.css'

import TextInput from '../components/TextInput.jsx'
import WelcomeTitle from '../components/WelcomeTitle.jsx';
import AuthButtons from '../components/AuthButtons.jsx'

import { checkRegister } from '../js/register.js';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const identityValid = checkRegister(username, password, passwordConfirm);
        if (identityValid) {    
            navigate("/home?register=success");
        }
    }

    return (
        <>
        <div className="register-background">
            <div className="container">
                <WelcomeTitle logoPath="/images/logo.png" logoStyleDict={{width: '50%', height: '50%'}}
                    title="Daftar" subtitle="Selamat datang!"/>

                <form id="register-form" onSubmit={handleRegister}>
                    <TextInput
                        description = "Username"
                        id          = "usernameInput"
                        type        = "text"
                        placeholder = "Masukkan username"
                        styleDict   = {{ marginBottom: '30px' }}
                        value       = {username}
                        onChange    = {(e) => setUsername(e.target.value)}
                    />

                    <TextInput
                        description = "Kata Sandi"
                        id          = "passwordInput"
                        type        = "password"
                        placeholder = "Masukkan kata sandi"
                        styleDict   = {{ marginBottom: '30px' }}
                        value       = {password}
                        onChange    = {(e) => setPassword(e.target.value)}
                    />

                    <TextInput
                        description = "Konfirmasi Kata Sandi"
                        id          = "confirmPasswordInput"
                        type        = "password"
                        placeholder = "Konfirmasi kata sandi"
                        value       = {passwordConfirm}
                        onChange    = {(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className="details">
                        <p>Sudah punya akun? <Link to="/">Masuk</Link></p>
                    </div>
                    
                    <AuthButtons primaryText="Daftar" secondaryText="Daftar dengan Google" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Register