import {React, useState} from 'react';
import {Layout, Menu} from 'antd';
import ApproveCourse from './ApproveCourse';
import CourseList from './CourseList';
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
      <MenuCompo/>
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