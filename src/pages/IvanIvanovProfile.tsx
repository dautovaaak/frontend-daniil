import React, { Component, ChangeEvent } from 'react';
import '../styles/IvanIvanovProfile.css';

interface State {
  editing: boolean;
  editedData: {
    city: string;
    country: string;
    username: string;
  };
}

class IvanIvanovProfile extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      editing: false,
      editedData: {
        city: "Ivan's City",
        country: "Ivan's Country",
        username: 'Ivanov_Ivan',
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
        city: "Ivan's City",
        country: "Ivan's Country",
        username: 'Ivanov_Ivan',
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
          src="https://jetexlogistics.com/wp-content/uploads/2020/01/banner-new-accounts.jpg"
          alt="Banner"
        />
        <img
          className="profile-image"
          src="https://this-person-does-not-exist.com/img/avatar-gene141ff7c6a67dc53933178a11014cb4a.jpg"
          alt="Profile"
        />

        <div className="user-info">
          <h2>Ivan Ivanov</h2>
          <p>@Ivanov_Ivan</p>

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
          <p>Latest tweet from Ivan Ivanov...</p>
        </div>
      </div>
    );
  }
}

export default IvanIvanovProfile;
