// Login.tsx
import React, { Component, ChangeEvent, FormEvent } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface State {
  email: string;
  password: string;
  error: string | null | undefined; // Specify 'undefined' as well to handle possible undefined values
}

class Login extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value, error: null } as Pick<State, keyof State>);
  };

  handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
    } catch (error: any) {
      console.error('Login error:', error.message);
      this.setState({ error: 'Login failed. Please check your credentials.' });
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
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

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>

          <p>Not registered yet? <Link to="/register">Register here</Link>.</p>
        </form>
      </div>
    );
  }
}

export default Login;
