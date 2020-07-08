import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'



function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App