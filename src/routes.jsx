import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {App} from './App';
import routeConfig from './config/routes';
import {Enter} from './components/pages/enter-page';
import {UsersPage} from './components/pages/users-page';



const WrappedComponent = (Component) => () =>(
    <App>
        <Component/>
    </App>
);

export default(
<Switch>
    <Route
    exact = {true}
    path={routeConfig.INDEX}
    component = {Enter}
    />
     <Route
    exact = {true}
    path={routeConfig.TABLE}
    component = {WrappedComponent(UsersPage)}
    />
</Switch>
)