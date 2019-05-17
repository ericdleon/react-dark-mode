import React, { Component } from 'react';
import Button from './Button';
import '../App.css';

class ChangeTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
       DefaultTheme: true
      };
    this.handleClickDefault = this.handleClickDefault.bind(this);
  }

  componentWillMount() {
    if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
       document.body.classList.add('dark-theme');
     }
  }

  handleClickDefault() {
  //    this.setState({DefaultTheme: document.body.classList.toggle('dark-theme')});
      let darkThemeEnabled = document.body.classList.toggle('dark-theme');
      this.setState({DefaultTheme: darkThemeEnabled});
      localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  }

    render(){
        return (
          <Button className = {'blackButton'} onClick={this.handleClickDefault} />
        );
      }

}

export default ChangeTheme;
