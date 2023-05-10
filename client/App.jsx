import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'; 
import { Login } from './components/Login.jsx';
import { render } from 'react-dom';
import { TrickForm } from './components/CreateTrick';


class App extends Component {
    render() {
        return (
        <div classname="App"> 
        <Login /> 
        <TrickForm />
    </div>
    )}
}

export default App;