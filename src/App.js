import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import './App.css'
import './Pages/Home/Home.css'


function App() {
  return (
    <Router>
      <div className="container">
        <ul className="navbar">
          <li className="nav-link">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App