import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'; 
import { Login } from './components/Login.jsx';
import { render } from 'react-dom';



class App extends Component {
    render() {
        return (
        <div classname="App"> 
        <h1> Testing </h1>
        <Login /> 
    </div>
    )}
}

export default App;