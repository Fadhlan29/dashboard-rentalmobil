import React, { useState } from 'react'
import '../styles/SignUpStyles/styles.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo/logo.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='container-signup'>
      <div className="content-wrap">        
        <img src={logo} alt="logo" className='logo'/>
        <form>
          <div className="title-form">
            <h1>Selamat datang kembali </h1>
            <p>Belum punya akun? <Link to='/signup'>Registrasi</Link></p>
          </div>

          <div className="form-input">
            <label>Email atau Username</label>
            <input type="text" data-type="email text"/>
          </div>
          <div className="form-input">
            <div className="label-password">
              <label>Password</label>
              <button 
              onClick={handleShowPassword} 
              style={{ border: 'none', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}
              type='button'>
              {showPassword ? <AiOutlineEyeInvisible size={15}/> : <AiOutlineEye size={15}/>}
              </button>
            </div>
            <input type={showPassword ? 'text' : 'password'}/>
          </div>

          <button className='btn-form'>
            Buat akun
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp