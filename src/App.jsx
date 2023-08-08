//eslint-disable-next-line
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useStateContext } from './context';
// import { useNavigate } from 'react-router-dom';

import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Discussions from "./components/ClassGroups/Discussions.jsx";
import Links from './components/Links/Links.jsx'
import Timetable from './components/Timetable/Timetable.jsx'
import Trainers from './components/Trainers/Trainers.jsx'
import Units from './components/Units/Units.jsx'
import SocialClubs from './components/Clubs/SocialClubs.jsx'
import Redirects from './pages/Redirects';
import Login from './auth/Login.js';
import Signup from './auth/Sign-up.js';
import Authlayout from './layouts/Authlayout';
import PrivateRoute from "./components/Private/PrivateRoute.jsx";

const App = () => {
  // const { token } = useStateContext();
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [token, navigate]);
  return (
    <Routes>
      {/* private routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/classgroups" element={<Discussions />} />
        <Route path="/externals" element={<Links />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="units" element={<Units />} />
        <Route path="clubs" element={<SocialClubs />} />
      </Route>

      <Route path="/redirects" element={<Redirects />} />
      {/* nested auth route */}
      <Route path="/auth" element={<Authlayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App
