import React, { Component } from 'react';
import '../styles/News.css';

interface State {
  isCopied: boolean;
}

class ChatFeatureNews extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isCopied: false,
    };
  }

  handleCopyLink = () => {
    const inviteText = "Join Daniil Reznikov's social network; there's nothing to do without you!";
    navigator.clipboard.writeText(inviteText);
    this.setState({ isCopied: true });

    setTimeout(() => {
      this.setState({ isCopied: false });
    }, 3000);
  };

  render() {
    const { isCopied } = this.state;

    return (
      <div className="news-container">
        <div className="news-article">
          <h2>New Chat Feature!</h2>
          <p>
            We are excited to announce the launch of a new feature in our chat. Now you have access to:
          </p>
          <ul>
            <li>Voice and video calls.</li>
            <li>Emojis and stickers for more expressive communication.</li>
            <li>The ability to create group chats.</li>
          </ul>
          <p>
            We hope these new features will make your chatting experience in our social network even more engaging!
          </p>
          <table className="user-table">
            <thead>
              <tr>
                <th>User Statistics</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last Online</td>
                <td>3 hours ago</td>
              </tr>
              <tr>
                <td>Published Photos</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="news-article">
          <h2>Top Discussion Topics</h2>
          <ul>
            <li>Modern trends in the world of technology.</li>
            <li>Art and design: inspiration every day.</li>
            <li>Travel and discoveries: exploring new places together.</li>
          </ul>
        </div>

        <div className="news-article">
          <h2>Invite Friends and Get Bonuses!</h2>
          <p>
            Now you can invite your friends to our community and receive exclusive bonuses. More friends, more fun!
          </p>
          <div className="buttons-container">
            <button className={`invite-button ${isCopied ? 'copied' : ''}`} onClick={this.handleCopyLink}>
              {isCopied ? 'Link Copied!' : 'Invite Friends'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatFeatureNews;
