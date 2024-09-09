import {React, useState} from 'react';
import {Layout, Menu} from 'antd';
import ApproveCourse from './ApproveCourse';
import CourseList from './CourseList';
import StaffList from './StaffList';
import Profile from '../Profile';
import DashboaPage from '../Dashboard/DashboardPage'
import './styleAdmin.css';

import MenuCompo from '../Component/MenuCompo';

//import benda yang perlu di menu

const {Content , Sider , Footer } = Layout;
const layoutStyle= {
  height:'100vb' , 
  display: 'flex',
  flexDirection:'column',
}

const itemInsideMenu =[
  {label:'Dashboard' , key: 'dash'},
  {label:'Approve Course' , key: 'approve'},
  {label:'Course List' , key: 'list'},
  {label:'Staff List' , key: 'sList'},
  {label:'Profile' , key: 'p'},
];

const styleMenu = {
  backgroundColor: 'white',
}

function AdminHomepage() {
  
  // react kepada user
  const [selectedKey , setSelectedKey]= useState('dash');
  const handleClick = (ev) =>{
    setSelectedKey(ev.key);
  }

  return (
    <Layout style={layoutStyle}>
      <MenuCompo/>
      <Layout >
        <Sider style={{backgroundColor: 'white'}}>
          <Menu mode='inline' style={styleMenu} items={itemInsideMenu} onClick={handleClick} selectedKeys={selectedKey} />
        </Sider>
        <Content>
          {selectedKey === 'dash' && <DashboaPage/>}
          {selectedKey === 'approve' && <ApproveCourse/>}
          {selectedKey === 'list' && <CourseList/>}
          {selectedKey === 'sList' && <StaffList/>}
          {selectedKey === 'p' && <Profile/>}
        </Content>
      </Layout>
      <Footer style={{fontSize:'12px', textAlign: 'center'}}>Copyright © 2024 ITMSysPKS - Internal Training Management System Politeknik Kuching Sarawak. All Rights Reserved.</Footer>
    </Layout>
  )
}

export default AdminHomepage