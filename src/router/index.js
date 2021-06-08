import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "../pages/About"
import Index from '../pages/App'

function AppRouter() {
    return(
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
        </Router>
    )
}

export default AppRouter