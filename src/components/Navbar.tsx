import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AuthButtons from './AuthButtons';
import '../styles/Navbar.css';

interface NavbarProps {
  // Define props here
}

interface NavbarState {
  showFriendsDropdown: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      showFriendsDropdown: false,
    };
  }

  toggleFriendsDropdown = () => {
    this.setState((prevState) => ({
      showFriendsDropdown: !prevState.showFriendsDropdown,
    }));
  };

  handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
      window.location.href = '/login'; // Redirect to login page after logout
    } catch (error: any) {
      console.error('Logout error:', error.message);
    }
  };

  render() {
    const { showFriendsDropdown } = this.state;
    const location = window.location.pathname;

    const hideNavbar = location === '/login' || location === '/register';

    return (
      <div className={`nav-container ${hideNavbar ? 'hidden' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li onMouseEnter={this.toggleFriendsDropdown} onMouseLeave={this.toggleFriendsDropdown}>
              <Link to="/friends">Friends</Link>
              {showFriendsDropdown && (
                <ul className="friends-dropdown">
                  <li><Link to="/profile/1">Ivan Ivanov</Link></li>
                  <li><Link to="/profile/2">Maria Sidorova</Link></li>
                  <li><Link to="/profile/3">Alexey Petrov</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/messenger">Messenger</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/customer-service">Customer Service</Link></li>
            <li><button className="auth-button logout-button" onClick={this.handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
