import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <div>
            <NavLink className = "navbar-item" activeClassName = "is-active" to="/">
                Home
            </NavLink>
            <NavLink className = "navbar-item" activeClassName = "is-active" to="/table">
                Table
            </NavLink>
        </div>
    );
}
export default Navbar;