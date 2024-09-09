import React from 'react'
import CartCompo from '../Component/CartCompo'

const cart_style = {
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    padding:'5px',
}

function StaffList() {
    const name = [
        "John Doe", "Jane Smith", "Alice Johnson", "Bob Williams", "Emily Davis"
      ];
      
      const email = [
        "johndoe@example.com", "janesmith@example.com", "alicejohnson@example.com",
        "bobwilliams@example.com", "emilydavis@example.com"
      ];
  return (
    <div style={cart_style}>
        {name.map((a , i)=>(
            <CartCompo staffName={a} staffEmail={email[i]}/>
        ))}
    </div>
  )
}

export default StaffList