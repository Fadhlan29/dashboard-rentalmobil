import React, { useState } from 'react'
import '../styles/SignUpStyles/styles.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo/logo.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='container-signup'>
      <div className="content-wrap">        
        <img src={logo} alt="logo" className='logo'/>
        <form>
          <div className="title-form">
            <h1>Buat akun baru </h1>
            <p>Sudah punya akun? <Link to='/login'>Masuk</Link></p>
          </div>

          <div className="form-input">
            <label>Email address</label>
            <input type="email" />
          </div>
          <div className="form-input">
            <label>Username</label>
            <input type="text" />
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