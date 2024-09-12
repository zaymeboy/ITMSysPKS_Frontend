import React from 'react'

// import style
import './style/styleLogin.css'

//import backend
import axios from 'axios';
import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import img1 from './Component/logo-pks.png';

function Login() {
    const navigate = useNavigate();
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    //improvement nanti
  //letak password hasing
  // buat session
  function handleSubmit(event){
    event.preventDefault(); 
    axios.post('http://localhost:8001/login', {username , password})
    .then(res=> {
      //console.log(res.data);
      console.log(res.data);
      
      if (res.data === "user"){
        navigate('/User');
      }else if (res.data === "staff"){
        navigate('/Staff');
      }else if (res.data === "admin"){
        navigate('/Admin');
      }else{
        alert("Wrong username or password");
      }
    })
    .catch(err => console.log(err))
    };
    return (
      <div className="bodyStyle">
        <div className="loginBox">
            <div class="Polylogo">
                <img src={img1} className='imgStyle' alt="logo" />
            </div>
            <div className="boxHeader">
                <p>Login</p>
                <div>Please login to use Internal Training Management System PKS</div>
            </div>
            <form className="form_style" onSubmit={handleSubmit}>
                <div className="input_style">
                    <input type="text" placeholder="Enter Email" onChange={e =>setUsername(e.target.value)}
                    autofocus required />
                </div>
                <div className="input_style">
                    <input type="password" placeholder="Enter Password" onChange={e =>setPassword(e.target.value)}
                    required />
                </div>
                <div className="style_other_item">
                    <div className="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox"  />
                        <label for="rememberMeCheckbox">Remember me</label>
                    </div>
                    <a href="#">I forgot my password!</a>
                </div>
                <button className='submitBtn' type="submit">Sign In</button>
            </form>
            <div className="login-card-footer">
                Don't have an account? <Link to='/Register'><a href="#">Register new account</a></Link>
            </div>
        </div>
    </div>
    )
}

export default Login