import React from 'react'

import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdPeople } from 'react-icons/io'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { GiArchiveRegister } from 'react-icons/gi'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { MdAdUnits } from 'react-icons/md'
import { BsTable } from 'react-icons/bs'
import { SiVisualstudiocode } from 'react-icons/si'


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

        <div className="t-details">
          <div className="bottom">
            <article className="timetable">
              <div className="timetable-right"><span>08:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">OOP</p>
                <p className="unit-code">011o</p>      
                <p className="time">
                  08:00 - 10:00
                </p>
              </div>
              <div className="timetable-left">Jillo</div>
            </article>
          </div>
          <div className="bottom">
            <article className="timetable react">
              <div className="timetable-right"><span>13:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">QT</p>
                <p className="unit-code">Qt09101</p>
                <p className="time">
                  13:00 - 15:00
                </p>
              </div>
              <div className="timetable-left">Slavian</div>
            </article>
          </div>
          <div className="bottom">
            <article className="timetable angular">
              <div className="timetable-right"><span>08:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">Visual Basics</p>
                <p className="unit-code">VBC 101</p>
                <p className="time">
                  08:00 - 10:00
                </p>
              </div>
              <div className="timetable-left">Morris</div>
            </article>
          </div>
          <div className="bottom">
            <article className="timetable vue">
              <div className="timetable-right"><span>08:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">SAD</p>
                <p className="unit-code"> 209 SAD</p>
                <p className="time">
                  08:00 - 10:00
                </p>
              </div>
              <div className="timetable-left">Eddar</div>
            </article>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="right" > right</div >
    </section >
  )
}

export default Dashboard
