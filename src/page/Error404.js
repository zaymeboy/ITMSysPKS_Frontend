import React from 'react'
import { Link } from 'react-router-dom'


function Error404() {
  const divStyle={
    textAlign: "center",
    width:"100%",
  }
  const styleLink={
    textDecoration: "none",
    color:"white",
    backgroundColor:'#3a571b',
    padding: "8px 10px 10px 10px",
    borderRadius:"5px",
  }
  const styleContainer={
    display: "flex",
    justifyContent:'center',
  }
  return (
    <div style={divStyle}>
        <h1>Error404</h1>
        <div style={styleContainer}>
          <Link to="/LoginPage" style={{ textDecoration: 'none' }}><p style={styleLink}>Go to Login Page</p></Link>
        </div>
    </div>
  )
}

export default Error404