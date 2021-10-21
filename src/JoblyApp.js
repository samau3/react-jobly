import Routes from "./Routes";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

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

    function loginUser(username, password) {
        // takes in username, password from form
        // calls an API function that logins user
        //      try/catch the API call
        // update state/context with the user info
    }


    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes loginUser={loginUser} />
            </BrowserRouter>
        </div>
    );
}

export default JoblyApp;