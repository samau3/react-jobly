import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";

/** Routes for Jobs, Companies, Company, Homepage */

function Routes({ loginUser }) {
    // maybe a ternary/if conditions for logged in vs not logged routes
    // leave the redirect to "/" outside of the conditonal logic to enable
    //      global redirect situations
    return (
        <Switch>
            <Route exact path="/jobs"><JobList /></Route>
            <Route exact path="/companies/:handle"><CompanyDetail /></Route>
            <Route exact path="/companies"><CompanyList /></Route>
            <Route exact path="/"><Homepage /></Route>

            <Route exact path="/login"><LoginForm loginUser={loginUser} /></Route>

            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;