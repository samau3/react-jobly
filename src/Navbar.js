import React from "react";
import { NavLink } from "react-router-dom";

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
    return (
        <nav>
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
        </nav>

    );
}

export default Navbar;