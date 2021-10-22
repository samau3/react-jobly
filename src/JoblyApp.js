import { useState, useEffect } from "react"
import UserContext from "./userContext";
import Routes from "./Routes";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";
import jwt from "jsonwebtoken";

/** Overarching component for Jobly
 * 
 * props:
 * - none
 * 
 * state: 
 * - none
 * 
 * events:
 * - none
 * 
 * App -> JoblyApp -> {Navbar, Routes}
 */
function JoblyApp() {
    const [token, setToken] = useState((localStorage.getItem("token") || null));
    const [user, setUser] = useState(null);
    // could make new state or merge state for loading with user
    const [err, setErr] = useState(null)
    console.log("Jobly App", { token, user })

    useEffect(function changeUserState() {
        if (token) {
            async function fetchUser() {
                try {
                    JoblyApi.token = token;
                    // could we possible decode token to get username info without having it 
                    // stored in localStorage to begin with?
                    // - yes, use JWT
                    // console.log("inside fetchUser", { token, jwt })
                    // console.log("decoding token", jwt.decode(token))
                    const resp = await JoblyApi.getUser(jwt.decode(token).username);
                    setUser(resp);
                } catch (error) {
                    setErr(error);
                }
            }
            fetchUser();
        }
    }, [token])


    /** Login user via server authentication */

    async function loginUser(userData) {
        const token = await JoblyApi.getToken(userData);
        localStorage.setItem("token", token);
        // is there a better way to handle accessing username on refresh than storing
        // it directly in localStorage?
        // localStorage.setItem("username", userData.username);
        setToken(token);
    }

    /** Register user via server authentication */
    // change from effect style; just make loginUser as async
    async function signupUser(userData) {
        const token = await JoblyApi.registerUser(userData);
        localStorage.setItem("token", token)
        // localStorage.setItem("username", userData.username);
        setToken(token);
    }

    /** Edit user information via server authentication */
    async function editUser(userData, username) {
        const resp = await JoblyApi.editUser(userData, username);
        setUser(resp);
    }

    /** Logout user by clearing token and user states */
    function logout() {
        console.log("Logout User");
        localStorage.clear();
        setToken(null);
        setUser(null);
    }
    if (err) {
        console.log("JoblyApp error", err);
    }

    // could change to be a state - to see if currentUser is loaded
    if (localStorage.getItem("token") && !user) {
        return <i>Loading...</i>
    }

    return (
        <div>
            <BrowserRouter>
                <UserContext.Provider value={user}>
                    <Navbar logout={logout} />
                    <Routes loginUser={loginUser} signupUser={signupUser} editUser={editUser} />
                    {err && <b>{err[0]}</b>}
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default JoblyApp;