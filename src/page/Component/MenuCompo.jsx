import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoPks from './logo-pks.png';
import {Layout} from 'antd';
import './MenuCompo.css'


const { Header } = Layout;
//function handle click logout


function MenuCompo() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/Login');
  }
  return (
    <Header style={{all:'unset'}}>
      <div className='styleHeader'>
        <img src={logoPks}  className='styleImg' alt='PKS Logo'/>
        <p className='welcomeText'>Welcome to Internal Training Management System PKS</p>
        <button className='styleLogout' onClick={handleClick}>Logout</button>
      </div>
    </Header>
  )
}

export default MenuCompo