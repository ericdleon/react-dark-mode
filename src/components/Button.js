import React from 'react';
import '../App.css';

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      Change Theme
    </button>
  );
}
export default Button;
