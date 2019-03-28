import React, { Component } from 'react'

export default class ShmooSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iteration: 0,
      message: ['What is a Shmoo anyway?', 'Shmoo is my name! Well...my real name is Susannah...', '\'Shmoo\' comes from the comic, Lil Abner.', 'My parents gave me the nickname as a baby, and it stuck.', 'Click here to learn more about the Shmoo!']
    }
    this.loopMessage = this.loopMessage.bind(this)
  }

  loopMessage() {
    let iteration = this.state.iteration + 1
    let maxLoop = this.state.message.length - 1
    if (iteration > maxLoop) iteration = 0
    this.setState({ iteration })
  }
   render() {
    return (
    <div className="header-section flex">
      <span><span id="shmoo-npm">shmoo</span></span>
      <a href="https://en.wikipedia.org/wiki/Shmoo" target="_blank" rel="noopener noreferrer" id="shmoo-search">{this.state.message[this.state.iteration]}</a>
      <div id="shmoo-button" onClick={this.loopMessage}>Click</div>
      {/* <img id="shmoo-img" src={require("./assets/shmoo.jpg")} /> */}
    </div>
    )
  }
}

// alternate links:
  // http://lil-abner.com/the-shmoo/
  // https://en.wikipedia.org/wiki/Shmoo
  // https://hubpages.com/entertainment/The-History-of-the-Shmoo
  