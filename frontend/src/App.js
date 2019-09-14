import React, { Component } from 'react'
import Instructions from './Instructions'
import Contact from './Contact'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {id: 1, name: "Angad", nickname: "greg", hobby: "dirty-ing"},
        {id: 2, name: "Roy", nickname: "uwu", hobby: "weeb"},
        {id: 3, name: "Daniel", nickname: "oppa", hobby: "losing money with options trading"},
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {

  }
  render() {
    return (
      <div className="App">
        <Instructions complete={true}/>
        <Counter />
        <h2>Add New Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value='Name'
            type='text'
            name='Name'/>
          <input
            value='Nickname'
            type='text'
            name='Nickname'/>
          <input
            value='Hobby'
            type='text'
            name='Hobby'/>
        </form>
        <br></br>
        <h2>Existing Contacts</h2>
        {this.state.contacts.map(x => (
          <Contact id={x.id} name={x.name} nickcname={x.nickname} hobby={x.hobby} />
        ))}
      </div>
    )
  }
}

export default App
