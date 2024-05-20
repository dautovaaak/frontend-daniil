import React, { Component, FormEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../redux/actions/authActions';
import '../styles/Register.css';

interface RegisterProps {
  createUser: (userData: { username: string; email: string; password: string }) => Promise<void>;
}

interface RegisterState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: string | null | undefined; // Add undefined to allow initial value of undefined
}



class Register extends Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value, error: null } as Pick<RegisterState, keyof RegisterState>);
  };

  handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    try {
      const userData = { username, email, password };
      await this.props.createUser(userData);
      console.log('User registered successfully');
    }  catch (error: any) { // Explicitly define error as any
      console.error('Registration error:', error.message);
      this.setState({ error: 'Registration failed. Please try again.' });
    }
  };
    

  render() {
    const { username, email, password, confirmPassword, error } = this.state;

    return (
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleInputChange}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(Register);
