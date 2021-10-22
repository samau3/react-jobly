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
        // console.log("changeUserState", { token, user })
        if (token) {
            async function fetchUser() {
                try {
                    // console.log("fetchUser try", token.userData.username)
                    JoblyApi.token = token.token;
                    // console.log("JoblyApi.token", JoblyApi.token)
                    const resp = await JoblyApi.getUser(token.userData.username);
                    // console.log("fetchUser resp", { resp })
                    setUser(resp);
                } catch (error) {
                    setErr(error);
                }
            }
            fetchUser();
        }
    }, [token])

    /** Login user via server authentication */
    // change from effect style; just make loginUser as async
    async function loginUser(userData) {
        const token = await JoblyApi.getToken(userData);
        setToken({ token, userData });
    }

    /** Register user via server authentication */
    // change from effect style; just make loginUser as async
    async function signupUser(userData) {
        const token = await JoblyApi.registerUser(userData);
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
        setToken(null);
        setUser(null);
    }

    // TODO: BETTER ERR HANDLING
    if (err) {
        console.log("JoblyApp error", err);
    }

    // is there a way to flash messages? 
    // maybe use a state that timesout or use bootstrap

    // move the errors state to be component specific
    // simplifies app functions; moves the try/catch to the forms
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