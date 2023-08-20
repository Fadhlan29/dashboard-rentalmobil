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
            </div>
            <input type='password'/>
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