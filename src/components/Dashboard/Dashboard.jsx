//eslint-disable-next-line
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboard.scss'

import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdPeople } from 'react-icons/io'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { GiArchiveRegister } from 'react-icons/gi'
// import { MdOutlineWhatsapp } from 'react-icons/md'
// import { MdAdUnits } from 'react-icons/md'
// import { BsTable } from 'react-icons/bs'
// import { IoNotificationsOutline } from 'react-icons/io5'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { Link } from 'react-router-dom'

// import Session from '../../views/Calendar/Calendar';
// import { useStateContext } from '../../context';
import { AiOutlineSearch } from 'react-icons/ai';

const Dashboard = () => {
  const navigate = useNavigate();
  // const { user } = useStateContext();

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
      </div>
    </section>
  )
}

export default Dashboard
