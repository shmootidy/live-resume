import React, { Component } from 'react'

export default class ShmooSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iteration: 0,
      // message: ['What is a Shmoo anyway?', 'Shmoo is my name! Well...my real name is Susannah...', '\'Shmoo\' comes from the comic, Lil Abner.', 'My parents gave me the nickname as a baby, and it stuck.', 'Click here to learn more about the Shmoo!']
      message: ['Hi, I\'m Shmoo!', 'It\'s a nickname...', 'Susannah is "real".', 'But I go by Shmoo.']
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
      <span>
        <span id="shmoo-npm">shmoo</span>
        <a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!">Contact Me</a>
      </span>
      <span>
        {/* <a href="https://en.wikipedia.org/wiki/Shmoo" target="_blank" rel="noopener noreferrer" id="shmoo-search">*/}<div id="shmoo-search">{this.state.message[this.state.iteration]}</div>
        <div id="shmoo-button" onClick={this.loopMessage}>More</div>
      </span>
    </div>
    )
  }
}

// alternate links:
  // http://lil-abner.com/the-shmoo/
  // https://en.wikipedia.org/wiki/Shmoo
  // https://hubpages.com/entertainment/The-History-of-the-Shmoo
  