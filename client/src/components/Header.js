import React from 'react';
import {Link, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';


export default () =>{
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dasboard</Link>
            </nav>
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
            </div>
        </div>
    );   
}