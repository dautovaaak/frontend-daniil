import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import '../styles/Messenger.css';

interface Friend {
  id: number;
  name: string;
}

interface Message {
  sender: 'user' | 'friend';
  text: string;
}

interface State {
  selectedFriend: number | null;
  messageInput: string;
  messages: Message[];
}

class Messenger extends Component<{}, State> {
  friendsData: Friend[];

  constructor(props: {}) {
    super(props);

    this.state = {
      selectedFriend: null,
      messageInput: '',
      messages: [],
    };

    this.friendsData = [
      { id: 1, name: 'Ivan Ivanov' },
      { id: 2, name: 'Maria Sidorova' },
      { id: 3, name: 'Alexey Petrov' },
      { id: 4, name: 'Chat Support' },
    ];
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    const { selectedFriend } = this.state;
  
    if (selectedFriend && selectedFriend !== prevState.selectedFriend) {
      setTimeout(() => {
        const initialMessages = selectedFriend === 4
          ? [{ sender: 'friend', text: 'Hello! How can we help you today?' }] 
          : [{ sender: 'friend', text: `Hello! It's ${this.friendsData[selectedFriend - 1].name}.` }];
        
        // Ensure messages are of type Message[]
        this.setState({ messages: initialMessages as Message[] });
      }, 1000);
    }
  }
  
  handleFriendSelect = (friendId: number) => {
    this.setState({ selectedFriend: friendId, messages: [] });
  };

  handleSendMessage = () => {
    const { messages, messageInput } = this.state;
    this.setState({ messages: [...messages, { sender: 'user', text: messageInput }], messageInput: '' });
  };

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSendMessage();
    }
  };

  render() {
    const { selectedFriend, messageInput, messages } = this.state;

    return (
      <div className="messenger-container">
        <div className="friends-list">
          <h3>Friends</h3>
          <ul>
            {this.friendsData.map((friend) => (
              <li key={friend.id} onClick={() => this.handleFriendSelect(friend.id)}>
                {friend.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-area">
          <h3>Chat</h3>
          {selectedFriend ? (
            <>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index} className={message.sender === 'user' ? 'user-message' : 'friend-message'}>
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="message-input">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => this.setState({ messageInput: e.target.value })}
                  onKeyPress={this.handleKeyPress}
                  placeholder="Type a message..."
                />
                <button onClick={this.handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <p>Select a friend to start the chat.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Messenger;
