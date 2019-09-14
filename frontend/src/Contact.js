import React, { Component } from 'react'

class Contact extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Contact">
          Name: {this.props.name}
      </div>
    )
  }
}

export default Contact
