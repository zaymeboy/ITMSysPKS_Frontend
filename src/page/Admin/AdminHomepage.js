import {React, useState} from 'react';
import {Layout, Menu} from 'antd';
import ApproveCourse from './ApproveCourse';
import CourseList from './CourseList';
import './styleAdmin.css';
import { Link } from 'react-router-dom'

import logoPks from './logo-pks.png';
//import benda yang perlu di menu

const {Content , Sider , Footer , Header } = Layout;
const layoutStyle= {
  height:'100vb' , 
  display: 'flex',
  flexDirection:'column',
}

const itemInsideMenu =[
  {label:'Approve Course' , key: 'approve'},
  {label:'Course List' , key: 'list'},
];

const styleMenu = {
  backgroundColor: 'white',
}

function AdminHomepage() {
  
  // react kepada user
  const [selectedKey , setSelectedKey]= useState('approve');
  const handleClick = (ev) =>{
    setSelectedKey(ev.key);
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={{backgroundColor: 'white', display: 'flex' , justifyContent:'space-between', alignItems:'center'}}>
      <img src={logoPks} width="auto" height='80%'  />
      <p className='welcomeText'>Welcome to Internal Training Management System PKS</p>
      <Link to={'/LoginPage'}><a className='btnLogout' href=''>Log-Out</a></Link>
      </Header>
      <Layout >
        <Sider style={{backgroundColor: 'white'}}>
          <Menu style={styleMenu} items={itemInsideMenu} onClick={handleClick} selectedKeys={selectedKey} />
        </Sider>
        <Content>
          {selectedKey === 'approve' && <ApproveCourse/>}
          {selectedKey === 'list' && <CourseList/>}
        </Content>
      </Layout>
      <Footer style={{fontSize:'12px', textAlign: 'center'}}>Copyright © 2024 ITMSysPKS - Internal Training Management System Politeknik Kuching Sarawak. All Rights Reserved.</Footer>
    </Layout>
  )
}

export default AdminHomepage