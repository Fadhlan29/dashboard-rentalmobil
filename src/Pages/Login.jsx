import React, { useState } from 'react'
import '../styles/SignUpStyles/styles.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo/logo.png'

const SignUp = () => {
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
            </div>
            <input type='password'/>
          </div>
          
          <button className='btn-form'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp