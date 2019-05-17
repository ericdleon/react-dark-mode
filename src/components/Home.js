import React, { Component } from 'react';
import Button from './ChangeTheme';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="center">
        <h1> This Is Home </h1>

          <Button />
      </div>
    );
  }
}

export default Home;
