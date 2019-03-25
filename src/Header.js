// contains Random, NameTitleTabs

import React, { Component } from 'react'
import Random from './Random'
import NameTitleTabs from './NameTitleTabs'
import ShmooSearch from './ShmooSearch'

import './style/header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iteration: 0,
      message: ['What is a Shmoo anyway?', 'Shmoo is my name! Well...my real name is Susannah...', '\'Shmoo\' comes from the comic, Lil Abner.', 'My parents gave me the nickname as a baby, and it stuck.']
    }
    this.loopMessage = this.loopMessage.bind(this)
  }

  loopMessage() {
    let iteration = this.state.iteration + 1
    this.setState({ iteration })
  }

  render() {
    return (
    <div id="header" className="sticky">
      <Random />
      <div className="header-section flex">
        <span><span id="shmoo">shmoo</span></span>
        {/* <img id="shmoo-img" src={require("./assets/shmoo.jpg")} /> */}
        <ShmooSearch data={this.state} loopMessage={this.loopMessage}/>
      </div>
      <NameTitleTabs tabs={this.props.tabs} tabToggle={this.props.tabToggle} />
    </div>
    )
  }
}
// http://lil-abner.com/the-shmoo/
