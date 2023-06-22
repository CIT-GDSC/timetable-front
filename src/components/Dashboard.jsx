import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
const Dashboard = () => {
  return (
    <section className='container'>
      <div className="left">
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className="separator">
          <p><AiFillDashboard className='dash-icon' />Dashboard</p>
        </div>
        <section className="options">
          <div className="option">
            <p><CgProfile className='dash-icon' />Profile</p>
          </div>
        </section>
      </div >
      {/* center */}
      <div className="center"></div>
      {/* right */}
      <div className="right" > right</div >
    </section >
  )
}

export default Dashboard
