import React, { Component } from "react";
import './Calendar.scss'
const WeeklyBox = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return (
        <div className="myWeek">
            <h2 className="weekHeader"> Weekly Progress!</h2>
            <div>
            <input id="heart" type="checkbox" />
            <label for="heart">❤</label>
                <label> SUNDAY </label>
            </div>
            <div>
            <input id="heart2" type="checkbox" />
            <label for="heart2">❤</label>
                <label> MONDAY </label>
            </div>
            <div>
            <input id="heart3" type="checkbox" />
            <label for="heart3">❤</label>
                <label> TUESDAY </label>
            </div>
            <div>
            <input id="heart4" type="checkbox" />
            <label for="heart4">❤</label>
                <label> WEDNESDAY </label>
            </div>
            <div>
            <input id="heart5" type="checkbox" />
            <label for="heart5">❤</label>
                <label> THURSDAY </label>
            </div>
            <div>
            <input id="heart6" type="checkbox" />
            <label for="heart6">❤</label>
                <label> FRIDAY </label>
            </div>
            <div>
            <input id="heart7" type="checkbox" />
            <label for="heart7">❤</label>
                <label> SATURDAY </label>
            </div>
        </div>
    )
}

export default WeeklyBox;