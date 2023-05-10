import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router"
import App from "./App"

//import styles.css

render(
    <BrowseRouter>
        <App />
    </BrowseRouter>,
    document.getElementById('app'),
)