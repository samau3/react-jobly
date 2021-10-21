import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/** Navigation Bar for app
 * 
 * props:
 * - none
 * 
 * events:
 * - none
 * 
 * state:
 * - none
 * 
 * JoblyApp -> Navbar
 */
function Navbar() {
    // pass in Logout function from Jobly
    if (!user){
        return (
            <nav className="nav" >
                <NavLink exact to="/">Jobly</NavLink>
                <NavLink exact to="/signup">Signup</NavLink>
                <NavLink exact to="/login">Log in</NavLink>
            </nav>
        );
    }
    return (
        <nav className="nav" >
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/">Log Out</NavLink>
        </nav>

    );
}

export default Navbar;