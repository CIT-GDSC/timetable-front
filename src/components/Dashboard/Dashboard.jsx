//eslint-disable-next-line
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboard.scss'

import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdPeople } from 'react-icons/io'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { GiArchiveRegister } from 'react-icons/gi'

import { AiOutlineSearch } from 'react-icons/ai';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // console.log(userAgent)
    if (
      /(android|iphone|ipad|ipod|blackberry|windows phone)/i.test(userAgent)
    ) {
      navigate("/redirects");
    }
  }, [navigate])
  return (
    <section className='dashboard'>
      <article>
        <AiFillDashboard />
        <CgProfile />
        <IoMdPeople />
        <PiChalkboardTeacherBold />
        <GiArchiveRegister />
      </article>
      <div className="left">
        <div className="search">
          <input type="text" />
          <AiOutlineSearch className='find' />
        </div>
        <br />
        <br />
        <hr />
        <div className="incoming">
          <h3>Incoming classess</h3>

          <div className="incoming-activities">

            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
            <div className="activity">
              <div className="activity-title">
                <h4>Mathematics</h4>
                <p className='time'>10:00am - 11:00am</p>
                Teacher- <span>Mr. John Doe</span>
                <p>Venue: Lrx-7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
