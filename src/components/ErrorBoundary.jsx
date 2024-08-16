/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ErrorPage from "./ErrorComponent";

class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError (error) {
    // Update state to render fallback UI
    return { hasError: true, error };
  }

  componentDidCatch (error, errorInfo) {
    // Log error information
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render () {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
