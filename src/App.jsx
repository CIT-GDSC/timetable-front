//eslint-disable-next-line
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </div>
  )
}

export default App
