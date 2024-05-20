import React, { Component, ChangeEvent } from 'react';
import '../styles/AlexeyPetrovProfile.css';

interface AlexeyPetrovProfileProps {
}

interface AlexeyPetrovProfileState {
  editing: boolean;
  editedData: {
    city: string;
    country: string;
    username: string;
  };
}

class AlexeyPetrovProfile extends Component<AlexeyPetrovProfileProps, AlexeyPetrovProfileState> {
  constructor(props: AlexeyPetrovProfileProps) {
    super(props);
    this.state = {
      editing: false,
      editedData: {
        city: 'Alexey\'s City',
        country: 'Alexey\'s Country',
        username: 'Alexey_Petrov',
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
        city: 'Alexey\'s City',
        country: 'Alexey\'s Country',
        username: 'Alexey_Petrov',
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
        <img className="banner" src="https://i.etsystatic.com/30097568/r/il/eedd26/4830848967/il_fullxfull.4830848967_ae2n.jpg" alt="Banner" />
        <img className="profile-image" src="https://images.generated.photos/GSQV7mHFYafMbRE_foJCjRfroduJ-dKSUMO5MHIWTQE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY3MjY0LmpwZw.jpg" alt="Profile" />

        <div className="user-info">
          <h2>Alexey Petrov</h2>
          <p>@Alexey_Petrov</p>

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
            <button onClick={this.handleSendMessageClick}>Send Message</button>
          )}
        </div>

        <div className="tweets">
          <p>Latest tweet from Alexey Petrov...</p>
        </div>
      </div>
    );
  }
}

export default AlexeyPetrovProfile;
