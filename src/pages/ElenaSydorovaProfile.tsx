import React, { Component, ChangeEvent } from 'react';
import '../styles/ElenaSydorovaProfile.css';

interface EditedData {
  city: string;
  country: string;
  username: string;
}

interface ElenaSydorovaProfileState {
  editing: boolean;
  editedData: EditedData;
  friendRequestSent: boolean;
}

class ElenaSydorovaProfile extends Component<{}, ElenaSydorovaProfileState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      editing: false,
      editedData: {
        city: 'Eden City',
        country: "Elena's Country",
        username: 'Elena_Sydorova',
      },
      friendRequestSent: false,
    };
  }

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
        city: 'Eden City',
        country: "Elena's Country",
        username: 'Elena_Sydorova',
      },
    });
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedData: { ...prevState.editedData, [name]: value },
    }));
  };

  handleAddFriendClick = () => {
    this.setState({ friendRequestSent: true });

    setTimeout(() => {
      this.setState({ friendRequestSent: false });
    }, 3000);
  };

  render() {
    const { editing, editedData, friendRequestSent } = this.state;

    return (
      <div className="profile-container">
        <img className="banner" src="https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png" alt="Banner" />
        <img className="profile-image" src="https://this-person-does-not-exist.com/img/avatar-gen2307d7ab4fbba547ca60a6865ced14d2.jpg" alt="Profile" />

        <div className="user-info">
          <h2>Elena Sydorova</h2>
          <p>@Elena_Sydorova</p>

          {editing ? (
            <div>
              <label>
                City:
                <input type="text" name="city" value={editedData.city} onChange={this.handleInputChange} />
              </label>
              <label>
                Country:
                <input type="text" name="country" value={editedData.country} onChange={this.handleInputChange} />
              </label>
              <label>
                Username:
                <input type="text" name="username" value={editedData.username} onChange={this.handleInputChange} />
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
            <>
              {friendRequestSent ? (
                <p>Friend request sent</p>
              ) : (
                <button onClick={this.handleAddFriendClick}>Add to Friends</button>
              )}
            </>
          )}
        </div>

        <div className="tweets">
          <p>Elena Sydorova's latest tweet...</p>
        </div>
      </div>
    );
  }
}

export default ElenaSydorovaProfile;
