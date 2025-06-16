// import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../style/login-register.css'

import TextInput from '../components/TextInput.jsx'
import WelcomeTitle from '../components/WelcomeTitle.jsx'
import AuthButtons from '../components/AuthButtons.jsx'

function Login() {
    // const [count, setCount] = useState(0)

    useEffect(() => {
        document.body.style.backgroundImage = "url('/src/assets/images/cinema-background.jpeg')"
    }, []);

    return (
      <>
      <div className="container">
          <WelcomeTitle logoPath="src/assets/images/logo.png" logoStyleDict={{width: '50%', height: '50%'}}
              title="Masuk" subtitle="Selamat datang kembali!"/>

          <form id="login-form">
              <TextInput description="Username" id="usernameInput" type="text" 
                  placeholder="Masukkan username" styleDict={{marginBottom: '30px'}}/>

              <TextInput description="Kata Sandi" id="passwordInput" type="password" 
                  placeholder="Masukkan kata sandi"/>

              <div className="details">
                  <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
                  <p><a href="https://www.google.com">Lupa kata sandi?</a></p>
              </div>
            
              <AuthButtons primaryText="Masuk" secondaryText="Masuk dengan Google" />
          </form>
      </div>
      </>
    )
}

export default Login
