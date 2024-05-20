import React, { Component, FormEvent, ChangeEvent } from 'react';
import '../styles/ForgotPassword.css';

interface ForgotPasswordState {
  email: string;
}

class ForgotPassword extends Component<{}, ForgotPasswordState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleForgotPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Forgot Password:', { email: this.state.email });
  };

  handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleForgotPassword}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleEmailChange}
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
