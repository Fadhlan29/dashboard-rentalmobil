import React, { useState } from 'react'
import '../styles/SignUpStyles/styles.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo/logo.png'
import axios from "axios";
import { useNavigate  } from "react-router-dom";

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('')
  const navigate = useNavigate ();

  const Auth = async(e) =>{
    e.preventDefault();
    try {
       await axios.post('http://localhost:5000/login',{
        username: username,
        password: password
      })
      // console.log(run);
      navigate("/dashboard");
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
        <form onSubmit={Auth}>
          <div className="title-form">
            <h1>Selamat datang kembali </h1>
            <p>Belum punya akun? <Link to='/signup'>Registrasi</Link></p>
          </div>
          <p>{msg}</p>
          <div className="form-input">
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-input">
            <div className="label-password">
              <label>Password</label>
            </div>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className='btn-form'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login