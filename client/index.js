import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router"
import App from "./App"

render(
    <BrowseRouter>
        <App />
    </BrowseRouter>,
    document.getElementById('app'),
)