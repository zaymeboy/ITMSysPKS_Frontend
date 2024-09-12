import React from 'react'
import './style/styleProfile.css'
import BoxCompo from './Component/BoxCompo'
import axios from 'axios';



function Profile() { 
    //session takda jadi pakai email aku
    const email = "azamspm1057@gmail.com";

    function getProfileData (outputwanted){
        axios.post('http://localhost:8001/profile', {email})
        .then(res=> {
            //console.log(res.data);
            
            const fullname = res.data[0]["fullname"];
            const identifier = res.data[0]["identifier"];
            const ic_number = res.data[0]["ic_number"];
            const department = res.data[0]["department"];
            const email = res.data[0]["email"];
            if (outputwanted ==="fullname"){
                return(fullname);
            }else if (outputwanted ==="identifier"){
                return(identifier);
            }else if (outputwanted ==="ic_number"){
                return(ic_number);
            }else if (outputwanted ==="department"){
                return(department);
            }else if (outputwanted ==="email"){
                return(email);
            }
        })
        .catch(err => console.log(err))
    };
    const outside=[
        "Full Name", "IC Number" , "Matrix or Staff Number" , "Department" , "Email"
    ];
    const inside = [
        getProfileData("fullname"),getProfileData("identifier"),getProfileData("ic_number"),getProfileData("department"),getProfileData("email")
    ]
    

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