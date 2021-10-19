import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";


function Routes() {
    return (
        <Switch>
            <Route exact path="/jobs"><JobList /></Route>
            <Route exact path="/companies/:company"><CompanyDetail /></Route>
            <Route exact path="/companies"><CompanyList /></Route>
            <Route exact path="/"><Homepage /></Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;