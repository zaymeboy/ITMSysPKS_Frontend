import React from 'react'
import './style/styleRegister.css'

function Register() {
  return (
    <div className='big-box'>
      <div className='borderStyle'>
        <h2>Register Account</h2>
        <form className='centeringForm'>
          <div className='formstyle'>
            <label for="">Username :</label> <input type='text'></input>
            <label for="">Email :</label><input type='text'></input>
            <label for="">Password :</label><input type='text'></input>
            <label for="">Confrim Password :</label><input type='text'></input>
          </div>
          <button type= 'submit' className='Registerbtn'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register