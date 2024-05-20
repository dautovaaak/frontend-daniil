import React, { Component } from 'react';
import '../styles/Profile.css';

interface State {
  isEditing: boolean;
  name: string;
  username: string;
  location: string;
}

class Profile extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isEditing: false,
      name: 'Daniil Reznikov',
      username: 'whothefuckisdaniil',
      location: 'Almaty, KZ',
    };
  }

  componentDidMount() {
    console.log('Profile component has mounted.');
  }

  componentWillUnmount() {
    console.log('Profile component will unmount.');
  }

  handleEditProfile = () => {
    this.setState({ isEditing: true });
  };

  handleSaveProfile = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { isEditing, name, username, location } = this.state;

    return (
      <div className="profile-container">
        <img className="banner" src="https://marketplace.canva.com/EAEeOQwo3jY/1/0/1600w/canva-purple-mountain-vintage-retro-twitch-banner-1NYTq34QR6I.jpg" alt="Banner" />
        <img
          className="profile-image"
          src="https://imagevars.gulfnews.com/2017/7/24/1_16a08412ffc.2063789_4172633237_16a08412ffc_large.jpg"
          alt="Profile"
        />

        <div className="user-info">
          {isEditing ? (
            <>
              <input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
              <input type="text" value={username} onChange={(e) => this.setState({ username: e.target.value })} />
              <input type="text" value={location} onChange={(e) => this.setState({ location: e.target.value })} />
            </>
          ) : (
            <>
              <h2>{name}</h2>
              <p>@{username}</p>
              <p>{location}</p>
            </>
          )}
        </div>

        <div className="action-buttons">
          {isEditing ? (
            <button className="edit-profile-button" onClick={this.handleSaveProfile}>
              Save Changes
            </button>
          ) : (
            <button className="edit-profile-button" onClick={this.handleEditProfile}>
              Edit Profile
            </button>
          )}
        </div>

        <div className="tweets">
          <p>Latest tweet from the user...</p>
        </div>
      </div>
    );
  }
}

export default Profile;
