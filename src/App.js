import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// pages
import Home from './Pages/Home/Home'



function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App