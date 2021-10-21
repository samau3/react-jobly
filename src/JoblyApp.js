import { useState } from "react"
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
    console.log("Jobly App", {token, user})

    function loginUser(userData) {
        async function authenticateFromApi() {
            try {
                const token = await JoblyApi.getToken(userData);
                setToken(token);
                const resp = await JoblyApi.getUser(userData);
                setUser(resp);
            } catch (error) {
                setErr(error);
            }
        }
        authenticateFromApi();
    }

    function signupUser(userData) {
        async function registerToApi() {
            try {
                const token = await JoblyApi.registerUser(userData);
                setToken(token);
                const resp = await JoblyApi.getUser(userData);
                setUser(resp);
            } catch (error) {
                setErr(error);
            }
        }
        registerToApi();
    }

    function editUser(userData) {
        async function updateApi() {
            try {
                const resp = await JoblyApi.editUser(userData);
                setUser(resp);
            } catch (error) {
                setErr(error);
            }
        }
        updateApi();
    }

    return (
        <div>
            <BrowserRouter>
                <UserContext.Provider value={user}>
                    <Navbar />
                    <Routes loginUser={loginUser} signupUser={signupUser} editUser={editUser} />
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default JoblyApp;