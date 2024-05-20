import React, { Component, ChangeEvent, FormEvent } from 'react';
import '../styles/MariaSidorovaProfile.css';

interface ProfileData {
  city: string;
  country: string;
  username: string;
}

interface State {
  editing: boolean;
  editedData: ProfileData;
}

class MariaSidorovaProfile extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      editing: false,
      editedData: {
        city: "Maria's City",
        country: "Maria's Country",
        username: 'Maria_Sidorova',
      },
    };
  }

  handleSendMessageClick = () => {
    window.location.href = '/messenger';
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleSaveClick = () => {
    this.setState({ editing: false });
  };

  handleCancelClick = () => {
    this.setState({
      editing: false,
      editedData: {
        city: "Maria's City",
        country: "Maria's Country",
        username: 'Maria_Sidorova',
      },
    });
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedData: { ...prevState.editedData, [name]: value },
    }));
  };

  render() {
    const { editing, editedData } = this.state;

    return (
      <div className="profile-container">
        <img
          className="banner"
          src="https://png.pngtree.com/background/20210714/original/pngtree-abstract-neon-circles-banner-vector-illustration-picture-image_1238007.jpg"
          alt="Banner"
        />
        <img
          className="profile-image"
          src="https://this-person-does-not-exist.com/img/avatar-gen11c8bf86044a258882d01bdfeb890028.jpg"
          alt="Profile"
        />

        <div className="user-info">
          <h2>Maria Sidorova</h2>
          <p>@Maria_Sidorova</p>

          {editing ? (
            <div>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={editedData.city}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={editedData.country}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={editedData.username}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
          ) : (
            <div>
              <p>{`City: ${editedData.city}`}</p>
              <p>{`Country: ${editedData.country}`}</p>
              <p>{`Username: ${editedData.username}`}</p>
            </div>
          )}
        </div>

        <div className="action-buttons">
          {editing ? (
            <>
              <button onClick={this.handleSaveClick}>Save</button>
              <button onClick={this.handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={this.handleSendMessageClick}>Send Message</button>
          )}
        </div>

        <div className="tweets">
          <p>Maria Sidorova's latest tweet...</p>
        </div>
      </div>
    );
  }
}

export default MariaSidorovaProfile;
