import React from 'react'

import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdPeople } from 'react-icons/io'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { GiArchiveRegister } from 'react-icons/gi'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { MdAdUnits } from 'react-icons/md'
import { BsTable } from 'react-icons/bs'
import { TbMathXy } from 'react-icons/tb'


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
            <CgProfile className='dash-icon' />
            <p>Profile</p>
          </div>
          <div className="option">
            <PiChalkboardTeacherBold className='dash-icon' />
            <p>Trainers</p>
          </div>
          <div className="option">
            <IoMdPeople className='dash-icon' />
            <p>ClassMates</p>
          </div>
          <div className="option">
            <BsTable className='dash-icon' />
            <p>TimeTable</p>
          </div>
          <div className="option">
            <GiArchiveRegister className='dash-icon' />
            <p>Attendances</p>
          </div>
          <div className="option">
            <MdAdUnits className='dash-icon' />
            <p>My units</p>
          </div>
          <div className="option">
            <MdOutlineWhatsapp className='dash-icon' />
            <p>Class group</p>
          </div>
        </section>
      </div >
      {/* center */}
      <div className="center">
        <div className="top">
          <div className="username">
            <h3>Hello, User</h3>
            <div className="date-time">
              <div className="top-left">
                <h1 className='title'>Timetable</h1>
                <p><span className="day">Monday</span><span className="month">July</span><span className="year">2021</span></p>
              </div>
              <div className="top-right">
                <p className="date">
                  12/12/2021 <BsTable />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <article className="timetable">
            <div className="time">8:00 AM</div>
            <div className="unit">
              <div className="unit-icon dash-icon"><TbMathXy/></div>
              <div className="unit-name">Information</div>
              <div className="unit- lecturer"></div>
            </div>
          </article>
        </div>
      </div>
      {/* right */}
      <div className="right" > right</div >
    </section >
  )
}

export default Dashboard
