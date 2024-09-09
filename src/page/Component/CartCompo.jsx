import React from 'react'

const card_body = {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    gap:'10px',
    margin: '5px',
    backgroundColor: 'white',
    borderRadius:'2.5px',
    width: '250px',
    padding:'10px',
}

const styleText={
    fontSize:'12px',
}

function CartCompo({ staffName , staffEmail}) {
  return (
    <div style={card_body}>
        <div style={styleText}>
            Staff name : {staffName}
        </div>
        <div style={styleText}>
            Staff Email : {staffEmail}
        </div>
        <div>
            <button>Become Admin</button>
        </div>
    </div>
  )
}

export default CartCompo