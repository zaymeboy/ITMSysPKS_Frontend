import React from 'react'
import './style/styleProfile.css'
import BoxCompo from './Component/BoxCompo'

function Profile() { 
    const outside=[
        "Full Name", "IC Number" , "Matrix or Staff Number"
    ];
    const inside=[
        "MOHAMMAD AZAM BIN RAMLI", "041101121057" , "05DDT22F1070"
    ];
  return (
    <div className='box_profile'>
        {outside.map((a , i)=>(
            <BoxCompo label={a} fill={inside[i]}/>
        ))}
    </div>
  )
}

export default Profile