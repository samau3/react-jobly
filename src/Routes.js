import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";

/** Routes for Jobs, Companies, Company, Homepage */

function Routes() {
    return (
        <Switch>
            <Route exact path="/jobs"><JobList /></Route>
            <Route exact path="/companies/:handle"><CompanyDetail /></Route>
            <Route exact path="/companies"><CompanyList /></Route>
            <Route exact path="/"><Homepage /></Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;