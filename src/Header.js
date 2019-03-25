// contains Random, NameTitleTabs

import React, { Component } from 'react'
import Random from './Random'
import NameTitleTabs from './NameTitleTabs'

import './style/header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iteration: 0,
      message: ['What is a Shmoo anyway?', 'Shmoo is my name! Well...my real name is Susannah...', '\'Shmoo\' comes from the comic, Lil Abner.', 'My parents gave me the nickname as a baby, and it stuck.', 'Want to know more? Click here.']
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
    <div id="header" className="sticky">
      <Random />
      <div className="header-section flex">
        <span><span id="shmoo-npm">shmoo</span></span>
        <a href="https://hubpages.com/entertainment/The-History-of-the-Shmoo" target="_blank" rel="noopener noreferrer" id="shmoo-search">{this.state.message[this.state.iteration]}</a>
        <div id="shmoo-button" onClick={this.loopMessage}>Click</div>
        {/* <img id="shmoo-img" src={require("./assets/shmoo.jpg")} /> */}
      </div>
      <NameTitleTabs tabs={this.props.tabs} tabToggle={this.props.tabToggle} />
    </div>
    )
  }
}
// alternate links:
  // http://lil-abner.com/the-shmoo/
  // https://en.wikipedia.org/wiki/Shmoo
