import { useState, useEffect } from "react"
import UserContext from "./userContext";
import Routes from "./Routes";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api";

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
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(null)
    console.log("Jobly App", { token, user })

    useEffect(function changeUserState() {
        if (token) {
            async function fetchUser() {
                try {
                    JoblyApi.token = token.token;
                    const resp = await JoblyApi.getUser(token.userData.username);
                    setUser(resp);
                } catch (error) {
                    setErr(error);
                }
            }
            fetchUser();
        }
    }, [token])

    useEffect(function getUserOnRefresh() {
        if (localStorage.getItem("token")) {
            async function fetchUser() {
                try {
                    const resp = await JoblyApi.getUser(localStorage.getItem("username"));
                    setUser(resp);
                } catch (error) {
                    setErr(error);
                }
            }
            fetchUser();
        }
    }, [])

    /** Login user via server authentication */
    // change from effect style; just make loginUser as async
    async function loginUser(userData) {
        const token = await JoblyApi.getToken(userData);
        localStorage.setItem("token", token)
        localStorage.setItem("username", userData.username)
        setToken({ token, userData });
    }

    /** Register user via server authentication */
    // change from effect style; just make loginUser as async
    async function signupUser(userData) {
        const token = await JoblyApi.registerUser(userData);
        localStorage.setItem("token", token)
        localStorage.setItem("username", userData.username)
        setToken({ token, userData });
    }

    /** Edit user information via server authentication */
    async function editUser(userData) {
        const resp = await JoblyApi.editUser(userData);
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

    // is there a way to flash messages? 
    // maybe use a state that timesout or use bootstrap
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