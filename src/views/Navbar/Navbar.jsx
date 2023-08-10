//eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <h1>Logo</h1>
            </div>
            <div className="nav-links">
                <p className='dashboard'>Dashboard</p>
                <p><Link to='/Discussion'></Link>Groups</p>
                <p><Link to='/Timetable'></Link>Timetable</p>
                <p><Link to='/Discussions'></Link>Class Groups</p>
                <p><Link to='/Clubs'></Link>Social Clubs</p>
                <p>Units</p>
                <p>Profile</p>
            </div>
        </nav>
    )
}



export default Navbar
