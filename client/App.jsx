import React, { Component } from "react";
import { Swicth, Route } from 'react-router-dom'; 
import { Login } from './components/Login';
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