import React from 'react';
import {  NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to="/">
                About US
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/PageGetStarted">
                Contact US
            </NavLink>
        </>
    );
}
export default Menu