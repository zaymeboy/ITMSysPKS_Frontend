import {React, useState} from 'react';
import {Layout, Menu} from 'antd';

import MenuCompo from '../Component/MenuCompo';

import RegisterCourse from './RegisterCourse';
import RegisterLecturer from './RegisterLecturer';
import RegisterParticipant from './RegisterParticipant';
import Attendance from './Attendance';
import Report from './Report';

import './styleStaff.css';

//import benda yang perlu di menu

const {Content , Sider , Footer } = Layout;
const layoutStyle= {
  height:'100vb' , 
  display: 'flex',
  flexDirection:'column',
}

const itemInsideMenu =[
  {label:'Register Course' , key: 'regC'},
  {label:'Register Lecturer' , key: 'regL'},
  {label:'Register Participant' , key: 'regP'},
  {label:'Attendance' , key: 'att'},
  {label:'Report' , key: 'rep'},
  
];

const styleMenu = {
  backgroundColor: 'white',
}


function StaffHomepage() {
  
  // react kepada user
  const [selectedKey , setSelectedKey]= useState('regC');
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
          {selectedKey === 'regC' && <RegisterCourse/>}
          {selectedKey === 'regL' && <RegisterLecturer/>}
          {selectedKey === 'regP' && <RegisterParticipant/>}
          {selectedKey === 'att' && <Attendance/>}
          {selectedKey === 'rep' && <Report/>}
        </Content>
      </Layout>
      <Footer style={{fontSize:'12px', textAlign: 'center'}}>Copyright © 2024 ITMSysPKS - Internal Training Management System Politeknik Kuching Sarawak. All Rights Reserved.</Footer>
    </Layout>
  )
}

export default StaffHomepage