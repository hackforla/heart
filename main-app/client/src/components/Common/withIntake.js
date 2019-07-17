import React, { Component } from 'react'

const styles = {
  topHeader: {
    background: '#6f7ce2',
    height: '400px',
  },
}

const withIntake = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div className="intake">
          <div style={styles.topHeader}></div>
          <WrappedComponent />
        </div>
      )
    }
  }
}

export default withIntake
