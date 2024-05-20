import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthButtons extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Log In</Link>
        <span> or </span>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default AuthButtons;