import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <div className="nav-style">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>

        <Route exact path ='/' component={Home} />
        <Route path ='/about' component={About} />
        <Route path ='/projects' component={Projects} />

      </div>
    </div>
      </Router>
    );
  }
}

export default App;
