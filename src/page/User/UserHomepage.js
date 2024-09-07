import {React, useState} from 'react';
import {Layout, Menu} from 'antd';

import Register from './Register';
import Attend from './Attend';
import Evaluate from './Evaluate';
import MenuCompo from '../Component/MenuCompo';


//import benda yang perlu di menu

const {Content , Sider , Footer } = Layout;
const layoutStyle= {
  height:'100vb' , 
  display: 'flex',
  flexDirection:'column',
}

const itemInsideMenu =[
  {label:'Register Course' , key: 'reg'},
  {label:'Attend Course' , key: 'att'},
  {label:'Evaluate Course' , key: 'eva'},
];

const styleMenu = {
  backgroundColor: 'white',
}


function UserHomepage() {
  
  // react kepada user
  const [selectedKey , setSelectedKey]= useState('reg');
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
          {selectedKey === 'reg' && <Register/>}
          {selectedKey === 'att' && <Attend/>}
          {selectedKey === 'eva' && <Evaluate/>}
        </Content>
      </Layout>
      <Footer style={{fontSize:'12px', textAlign: 'center'}}>Copyright © 2024 ITMSysPKS - Internal Training Management System Politeknik Kuching Sarawak. All Rights Reserved.</Footer>
    </Layout>
  )
}

export default UserHomepage