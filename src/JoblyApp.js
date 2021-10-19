import Routes from "./Routes";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

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