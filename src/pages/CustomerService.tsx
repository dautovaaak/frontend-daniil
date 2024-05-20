import React, { Component, MouseEvent } from 'react';
import '../styles/CustomerService.css';
import { Link } from 'react-router-dom';

interface CustomerServiceState {
  faqVisibility: { [key: string]: boolean };
}

class CustomerService extends Component<{}, CustomerServiceState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      faqVisibility: {},
    };
  }

  toggleFaqVisibility = (faqId: string) => {
    this.setState((prevState) => ({
      faqVisibility: {
        ...prevState.faqVisibility,
        [faqId]: !prevState.faqVisibility[faqId],
      },
    }));
  };

  render() {
    const { faqVisibility } = this.state;

    return (
      <div className="customer-service-container">
        <h2>Customer Service</h2>
        <div className="customer-service-section">
          <h3 className="customer-service-title">Contact Us</h3>
          <p className="customer-service-content">
            If you have any questions or issues, <Link to="/chat-support">contact us via chat</Link>.
          </p>
        </div>
        <div className="customer-service-section">
          <h3 className="customer-service-title">Frequently Asked Questions</h3>
          <p className="customer-service-content">
            Here, you can find answers to frequently asked questions from our customers.
          </p>
          <ul>
            <li>
              <strong onClick={() => this.toggleFaqVisibility('create-account')}>How do I create an account?</strong>
              {faqVisibility['create-account'] && (
                <p>To create an account, go to the registration page and fill in the necessary information.</p>
              )}
            </li>
            <li>
              <strong onClick={() => this.toggleFaqVisibility('change-password')}>How do I change my password?</strong>
              {faqVisibility['change-password'] && (
                <p>You can change your password in the settings of your profile after logging into your account.</p>
              )}
            </li>
            <li>
              <strong onClick={() => this.toggleFaqVisibility('contact-support')}>How to contact support?</strong>
              {faqVisibility['contact-support'] && (
                <p>Use the chat with customer support on our website or send us an email.</p>
              )}
            </li>
            <li>
              <strong onClick={() => this.toggleFaqVisibility('privacy-concerns')}>What measures are taken for privacy concerns?</strong>
              {faqVisibility['privacy-concerns'] && (
                <p>We prioritize user privacy and implement encryption protocols to secure your data.</p>
              )}
            </li>
            <li>
              <strong onClick={() => this.toggleFaqVisibility('account-recovery')}>Forgot my password, how can I recover my account?</strong>
              {faqVisibility['account-recovery'] && (
                <p>You can initiate the account recovery process on the login page by clicking on the "Forgot Password" link.</p>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CustomerService;
