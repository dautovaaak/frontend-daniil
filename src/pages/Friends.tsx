import React, { Component, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Friends.css';
import { connect } from 'react-redux';
import { setFriends } from '../redux/actions/friendsActions';

interface Friend {
  id: number;
  name: string;
  details: string;
}

interface FriendsState {
  searchQuery: string;
  friendsData: Friend[];
}

class Friends extends Component<{}, FriendsState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      searchQuery: '',
      friendsData: [],
    };
  }

  componentDidMount() {
    // Simulating fetching data from an API
    setTimeout(() => {
      this.setState({
        friendsData: [
          { id: 1, name: 'Ivan Ivanov', details: 'Common Interests: sports, movies' },
          { id: 2, name: 'Maria Sidorova', details: 'Common Interests: music, travel' },
          { id: 3, name: 'Alexey Petrov', details: 'Common Interests: technology, books' },
        ],
      });
    }, 1000);
  }

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery, friendsData } = this.state;

    const filteredFriends = friendsData.filter((friend) =>
      friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="friends-container">
        <h2>Friends</h2>
        <div>
          <label>
            <input
              type="text"
              value={searchQuery}
              onChange={this.handleSearchInputChange}
              placeholder="Search friends"
            />
          </label>
        </div>
        <ul className="friend-list">
          {filteredFriends.map((friend) => (
            <li key={friend.id} className="friend-list-item">
              <Link to={`/profile/${friend.id}`} className="friend-link">
                <div className="friend-card">
                  <h3 className="friend-name">{friend.name}</h3>
                  <p className="friend-details">{friend.details}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  friends: state.friends,
});

export default connect(mapStateToProps, { setFriends })(Friends);
