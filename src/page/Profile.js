import React from 'react'
import './style/styleProfile.css'
import BoxCompo from './Component/BoxCompo'

function Profile() { 
    const outside=[
        "Full Name", "IC Number" , "Matrix or Staff Number" , "Department" , "Email"
    ];
    const inside=[
        "Full Name", "IC Number" , "Matrix or Staff Number" , "Department" , "Email"
    ];
    
  return (
        <div className='box_profile'>
            {outside.map((a , i)=>(
                <BoxCompo label={a} fill={inside[i]}/>
            ))}
            <button className='btnUpdate'>Update</button>
       </div>
    
    
    
  )
}

export default Profile