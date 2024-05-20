import React, { Component, ErrorInfo } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    hasError: false,
  };

  componentDidMount() {
    console.log('Home component has mounted.');
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log('Home component has updated.');
  }

  componentWillUnmount() {
    console.log('Home component will unmount.');
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught in Home component:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return (
      <div>
        <h2>Welcome to our social network!</h2>
        <p>
          Here you can{' '}
          <Link to="/friends">connect with friends</Link>,{' '}
          <Link to="/news">stay updated with news</Link>, and{' '}
          <Link to="/profile">share your experiences</Link>.
        </p>

        <div>
          <h3>Latest News</h3>
          <ul>
            <li>
              <Link to="/news">New features in the chat!</Link>
            </li>
            <li>
              <Link to="/blog">Blog: How to keep your profile interesting</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Friends' Activity</h3>
          <ul>
            <li>
              <Link to="/friends">Maria updated her status</Link>
            </li>
            <li>
              <Link to="/friends">Ivan posted a new photo</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Friend Recommendations</h3>
          <ul>
            <li>
              <Link to="/profile/lena">Elena</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
