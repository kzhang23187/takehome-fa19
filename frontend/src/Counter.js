import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.incrementClick = this.incrementClick.bind(this)
    this.decrementClick = this.decrementClick.bind(this)
  }

  incrementClick() {
    this.setState(state => {
      return{count: state.count + 1}
    })
  }

  decrementClick() {
    this.setState(state => {
      return{count: state.count - 1}
    })
  }

  render() {
    return (

      <div className="Counter">
        <button onClick={this.incrementClick}> Increment Count</button>
        <button onClick={this.decrementClick}> Decrement Count</button>
        count: {this.state.count}
      </div>
    )
  }
}

export default Counter
