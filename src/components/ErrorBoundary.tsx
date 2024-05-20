import React, { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{error && error.toString()}</p>
          <p>{errorInfo && errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
