import React from 'react'
//import {Link} from 'react-router-dom'
import './styleDashboard.css'

function CartDash( {cartTitle , cartContent}){
  return (
    <div className='cart_small'>
      <p>{cartTitle}</p>
      <p>{cartContent}</p>
    </div>
  )
}



function DashboardPage() {
  const title = [
    'Total Course', 'Active Course', 'Upcomming Course' , 'Completed Course'
  ]
  
  const content = [
    10,10,10,10,10
  ]
  const title1 = [
    'Total Learners', 'Active Learners', 'Completed Learners' , 'Learner Completion Rate'
  ]
  
  const content1 = [
    10,10,10,10,10
  ]
  return (
    <div className='dash_big'>
        <div className='cart1'>
          <p>Internal Training Overview</p>
          {title.map((a , i)=>(
            <CartDash cartTitle={a} cartContent={content[i]}/>
          ))}
        </div>
        <div className='cart1'>
          <p>Learner Metrics</p>
          {title1.map((a , i)=>(
            <CartDash cartTitle={a} cartContent={content1[i]}/>
          ))}
        </div>
        
    </div>
  )
}

export default DashboardPage