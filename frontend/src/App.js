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
      ],
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeText = this.changeText.bind(this);
  }
  handleSubmit(event) {
    this.refs.counter.incrementClick()
    this.setState({
      contacts: this.state.contacts.concat({id: this.state.contacts.length + 1, name: this.state.value, nickname: "nickname", hobby: "hobby"})
    })
  }
  changeText(event){
        this.setState(
            {value : event.target.value}
        );
    }
  render() {
    return (
      <div className="App">
        <Instructions complete={true}/>
        <Counter ref = "counter"/>
        <h2>Add New Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.value}
            onChange = {this.changeText}
            type='text'
            name='Name'/>
        </form>
        <button onClick = {this.handleSubmit}>Submit</button>
        <br></br>
        <h2>Existing Contacts</h2>
        {this.state.contacts.map(x => (
          <Contact id={x.id} name={x.name} nickname={x.nickname} hobby={x.hobby} />
        ))}
      </div>
    )
  }
}

export default App
