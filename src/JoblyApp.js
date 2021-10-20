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
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes></Routes>
            </BrowserRouter>
        </div>
    );
}

export default JoblyApp;