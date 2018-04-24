import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import About from './About';
import Error from './Error';


export default (props) =>{
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link to="/">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <div>
                <Switch>
                    <Route path="/" component={About} exact/>
                    <Route path="/login" render={() => <Login handleLoginUser={props.handleLoginUser}/>} exact/>
                    <Route path="/dashboard" render={() => <Dashboard handleGetLogs={props.handleGetLogs} logs={props.logs}/>} exact/>                    
                    <Route path="/" component={Error}/>
                </Switch>
            </div>
        </div>
    );   
}