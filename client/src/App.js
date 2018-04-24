import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import Header from'./components/Header';
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleGetLogs = this.handleGetLogs.bind(this);
    this.state={
      logs : []
    }
    
  }
  handleGetLogs(e){
    let api_key = document.getElementById("api_key").value;
    axios.get(`/get_logs?api_key=${api_key}`)
      .then((res) => {        
        this.setState(() => {
          return {
            logs:res.data.logs
          }
        })
      })
      .catch((err) => {
        this.setState(() => {
          return {
            logs:[]
          }
        })
        alert('Wrong api_key');
        console.log(err);
      })
  }
  handleLoginUser(e){
    let userInfo = {
      user_name: document.getElementById('user_name').value,
      password: document.getElementById('password').value
    }
    e.preventDefault();    
    axios.post('/login', userInfo, {
      validateStatus : (status) =>{
        if (status===400){
          alert('Invalid input. Both fields are required and must be longer than 4 chars.');
          return false;
        }
        return status >= 200 && status < 300;
      }})
    .then((res) => {
      console.log(res);
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <BrowserRouter>        
          <Header 
          handleLoginUser={this.handleLoginUser} 
          handleGetLogs={this.handleGetLogs}
          logs={this.state.logs}
          />
      </BrowserRouter>
    );
  }
}

