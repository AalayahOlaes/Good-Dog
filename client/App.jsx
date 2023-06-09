import React, { Component, useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'; 
// import { Login } from './components/Login.jsx';
import { render } from 'react-dom';
import { TrickForm } from './components/CreateTrick';
import TrickCard from './components/TrickCard';
import WeeklyBox from './components/Calendar';
import './styles.css';




function App() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleUpdate = (newData) => {
        setData((prevData) => [newData, ...prevData]);
        // setData([newData, ...data]);
    };

    useEffect(() => {
        fetch(`http://localhost:3000/api/`)
        .then((res) => res.json())
        .then((trickData) => {
            console.log(trickData)
            setData(trickData)
            setIsLoaded(true)
        })
        .catch((err) => console.log(err))
    }, []);

    return (
    <div className="App"> 
        {/* <Login />  */}
        <div className="formAndWeek">
            <TrickForm setData={handleUpdate}/>
            <WeeklyBox />
        </div>
        <div className="cardParent">
        {data.map((trick) => (
      <TrickCard key={trick._id} trick={trick}/>
    ))}
    </div>
    </div>
    )
}

export default App;