//eslint-disable-next-line
import React from "react";
import { createContext, useState, useContext, } from "react"
import PropTypes from 'prop-types';
// import { propTypes } from 'prop-types';
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
});


export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'John Doe'
    });
    const [token, _setToken] = useState();
    // console.log(token)
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);

        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}





export const useStateContext = () => useContext(StateContext);

// Path: react/src/components/DefaultLayout.js
