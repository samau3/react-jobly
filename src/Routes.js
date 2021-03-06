import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import UserContext from "./userContext";

/** Routes for Jobs, Companies, Company, Homepage, SignupForm, Profile, LoginForm */

function Routes({ loginUser, signupUser, editUser }) {
    const user = useContext(UserContext);
    console.log("Routes", { user });

    return (
        <>
            {user &&
                <Switch>
                    <Route exact path="/"><Homepage /></Route>
                    <Route exact path="/jobs"><JobList /></Route>
                    <Route exact path="/companies/:handle"><CompanyDetail /></Route>
                    <Route exact path="/companies"><CompanyList /></Route>
                    <Route exact path="/profile"><Profile editUser={editUser} /></Route>
                    <Redirect to="/" />
                </Switch>
            }
            {!user &&
                <Switch>
                    <Route exact path="/"><Homepage /></Route>
                    <Route exact path="/login"><LoginForm loginUser={loginUser} /></Route>
                    <Route exact path="/signup"><SignupForm signupUser={signupUser} /></Route>
                    <Redirect to="/" />
                </Switch>
            }
        </>
    );
}

export default Routes;

/*
    return (
        <Switch>
            <Route exact path="/"><Homepage /></Route>
            {user && <>
                <Route exact path="/jobs"><JobList /></Route>
                <Route exact path="/companies/:handle"><CompanyDetail /></Route>
                <Route exact path="/companies"><CompanyList /></Route>
                <Route exact path="/profile"><Profile editUser={editUser} /></Route>
                <Redirect to="/" />
            </>}
            {!user && <>
                <Route exact path="/login"><LoginForm loginUser={loginUser} /></Route>
                <Route exact path="/signup"><SignupForm signupUser={signupUser} /></Route>
                <Redirect to="/" />
            </>}

        </Switch>
    );
*/


/*
    if (!user) {
        return (
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route exact path="/login"><LoginForm loginUser={loginUser} /></Route>
                <Route exact path="/signup"><SignupForm signupUser={signupUser} /></Route>
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path="/"><Homepage /></Route>
            <Route exact path="/jobs"><JobList /></Route>
            <Route exact path="/companies/:handle"><CompanyDetail /></Route>
            <Route exact path="/companies"><CompanyList /></Route>
            <Route exact path="/profile"><Profile editUser={editUser} /></Route>
            <Redirect to="/" />
        </Switch>
    );
*/