import React from 'react'

const style_box = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  backgroundColor: 'white', 
  padding:'0px 10px 0px 20px',
}

function BoxCompo({label , fill}) {
  return (
    <div style={style_box}>
        <p>{label}</p>
        <input placeholder={fill} style={{ width: '250px' , height: '30px' }} />
    </div>
  )
}

export default BoxCompo