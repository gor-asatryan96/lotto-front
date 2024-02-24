import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false }
    }
    
    static getDerivedStateFromError() {
        return { hasError: true };
      }

      render() {
        if (this.state.hasError) {
          return <p style={{fontFamily: 'Prompt Bold',display:'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Something went wrong, please try again</p>;
        }
    
        return this.props.children; 
      }
}
export default ErrorBoundary
