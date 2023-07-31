//eslint-disable-next-line
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Discussions from "./components/ClassGroups/Discussions.jsx";
import Links from './components/Links/Links.jsx'
import Timetable from './components/Timetable/Timetable.jsx'
import Trainers from './components/Trainers/Trainers.jsx'
import Units from './components/Units/Units.jsx'
import SocialClubs from './components/Clubs/SocialClubs.jsx'


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/classgroups" element={<Discussions />} />
        <Route path='/externals' element={<Links />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='units' element={<Units />} />
        <Route path='clubs' element={<SocialClubs/>} />
      </Routes>
    </div>
  )
}

export default App
