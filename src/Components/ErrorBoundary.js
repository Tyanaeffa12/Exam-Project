import React from "react";
import { Link } from "react-router-dom";

//error boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {}
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.<Link to='/'>Go back to home page</Link></h1>;
      }
  
      return this.props.children;
    }
  }
  

  export default ErrorBoundary