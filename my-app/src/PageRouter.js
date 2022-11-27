import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from 'App.js';
import Company from 'Company.js';

class PageRouter extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Company</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={App} />
              <Route path='/company' component={Company} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default PageRouter;