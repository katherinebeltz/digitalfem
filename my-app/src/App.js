import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Company from './Company.js';

class App extends Component {
  render() {
    return (
    <Router>
       <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/company'} className="nav-link">Company</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route exact path='/' component={Home} />
              <Route path='/company' component={Company} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;