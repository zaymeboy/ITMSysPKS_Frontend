import React from 'react'
import { Link } from 'react-router-dom'
import logoPks from './logo-pks.png';
import {Layout} from 'antd';
import './MenuCompo.css'

const { Header } = Layout;

function MenuCompo() {
  return (
    <Header className='styleHeader'>
      <img src={logoPks}  className='styleImg' alt='PKS Logo'/>
      <p className='welcomeText'>Welcome to Internal Training Management System PKS</p>
      <Link to={'/LoginPage'} className='btnContainer'>
        <a className='styleLogout' href="http://" target="_blank" rel="noopener noreferrer">Logout</a>
      </Link>
    </Header>
  )
}

export default MenuCompo