import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import UserContext from "./userContext";

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
function Navbar({ logout }) {
    // pass in Logout function from Jobly

    const user = useContext(UserContext);

    if (!user) {
        return (
            <nav className="nav" >
                <NavLink exact to="/">Jobly</NavLink>
                <NavLink exact to="/signup">Signup</NavLink>
                <NavLink exact to="/login">Log in</NavLink>
            </nav>
        );
    }
    return (
        <>
            {user &&
                <nav className="nav" >
                    <NavLink exact to="/">Jobly</NavLink>
                    <NavLink exact to="/companies">Companies</NavLink>
                    <NavLink exact to="/jobs">Jobs</NavLink>
                    <NavLink exact to="/profile">Profile</NavLink>
                    <NavLink onClick={logout} exact to="/">Log Out {user.user.username}</NavLink>
                </nav>
            }
            {!user &&
                <nav className="nav" >
                    <NavLink exact to="/">Jobly</NavLink>
                    <NavLink exact to="/signup">Signup</NavLink>
                    <NavLink exact to="/login">Log in</NavLink>
                </nav>
            }
        </>
    );
}

export default Navbar;

/*
    if (!user) {
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
            <NavLink onClick={logout} exact to="/">Log Out {user.user.username}</NavLink>
        </nav>

    );
*/