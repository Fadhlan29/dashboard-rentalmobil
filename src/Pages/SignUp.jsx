import React, { useState } from 'react'
import '../styles/SignUpStyles/styles.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo/logo.png'
import axios from "axios";
import { useNavigate  } from "react-router-dom";
// import { Register } from '../../backend/controller/PenggunaController'

const SignUp = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('')
  const navigate = useNavigate ();
  const [id_akses] = useState('2');

  const Register = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/pengguna',{
        username: username,
        password: password,
        email: email,
        id_akses: id_akses
      })
      navigate("/login");
    } catch (error) {
      if (error.response){
        setMsg(error.response.data.msg);
      }
    }                             
  }

  return (
    <div className='container-signup'>
      <div className="content-wrap">        
        <img src={logo} alt="logo" className='logo'/>
        <form onSubmit={Register}>
          <div className="title-form">
            <h1>Buat akun baru </h1>
            <p>Sudah punya akun? <Link to='/login'>Masuk</Link></p>
          </div>
          <div className="form-input">
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-input">
            <label>Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-input">
            <div className="label-password">
              <label>Password</label>
            </div>
            <input type='password'value={password} onChange={(e) => setPassword(e.target.value)} required />
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