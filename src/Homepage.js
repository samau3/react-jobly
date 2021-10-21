import { useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";

/** Landing page for JoblyApp
 * If user logged in, shows message
 * If no user, shows links to login/signup
 * 
 * props:
 * -none
 * 
 * states:
 * - none
 * 
 * events:
 * -none
 * 
 * Routes -> HomePage
 */

// does Link not need an exact attribute? - Links don't need exact, but NavLinks do
// Link just acts as an interrupt
function Homepage() {
    const user = useContext(UserContext);
    console.log("Homepage", { user })
    return (
        <>
            <h1>Jobly </h1>
            <h3>All jobs in one place.</h3>
            {user
                ? <h3>Welcome back {user.user.username}!</h3>
                : <> <button><Link to="/signup">Signup</Link></button>
                    <button><Link to="/login">Log in</Link></button></>
            }
        </>
    );
}

export default Homepage;