//eslint-disable-next-line
import React from "react";



import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "./auth/Login";
import Signup from "./auth/Sign-up";
import Discussions from "./components/ClassGroups/Discussions";
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import SocialClubs from './components/Clubs/SocialClubs';
import Units from './components/Units/Units';
import Trainers from './components/Trainers/Trainers';
import Redirects from './pages/Redirects';
import Timetable from './components/Timetable/Timetable';

import DefaultLayout from "./Layouts/DefaultLayout";
import GuestLayout from "./Layouts/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/', element: <DefaultLayout />,
        children: [
            { path: '/', element: <Navigate to="/Timetable" /> },
            { path: '/Timetable', element: <Timetable /> },
            { path: 'Dashboard', element: <Dashboard /> },
            { path: 'Profile', element: <Profile /> },
            { path: 'Discussions', element: <Discussions /> },
            { path: 'SocialClubs', element: <SocialClubs /> },
            { path: 'Units', element: <Units /> },
            { path: 'Trainers', element: <Trainers /> },
            { path: 'Redirects', element: <Redirects /> },

        ]
    },
    {
        path: '/', element: <GuestLayout />,
        children: [
            { path: '/Login', element: <Login /> },
            { path: '/register', element: <Signup /> },
        ]
    }
]);


export default router;
