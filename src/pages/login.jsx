import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/login-register.css'
import '../style/loginbg.css'

import TextInput from '../components/TextInput.jsx'
import WelcomeTitle from '../components/WelcomeTitle.jsx'
import AuthButtons from '../components/AuthButtons.jsx'

import { useUsers } from '../hooks/useUsers';
import { checkLogin } from '../js/login.js';
import { setToken } from '../services/auth/authService.js';

function Login() {
    const {users} = useUsers();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const identityValid = checkLogin(users, username, password);
        if (identityValid) {    
            setToken(JSON.stringify({
                username: username,
                password: password,
                token: username + Date.now().toString(),
                userID: identityValid
            }));
            navigate("/home?login=success");
        }
        else {
            alert("Username atau kata sandi salah!");
        }
    }

    return (
        <>
        <div className='login-background'>
            <div className="container">
                <WelcomeTitle logoPath="/images/logo-background/logo.png" logoStyleDict={{width: '50%', height: '50%'}}
                    title="Masuk" subtitle="Selamat datang kembali!"/>

                <form id="login-form" onSubmit={handleLogin}>
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
                        value       = {password}
                        onChange    = {(e) => setPassword(e.target.value)}
                    />

                    <div className="details">
                        <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
                        <p><a href="https://www.google.com">Lupa kata sandi?</a></p>
                    </div>
                    
                    <AuthButtons primaryText="Masuk" secondaryText="Masuk dengan Google" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
