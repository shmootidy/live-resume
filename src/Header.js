// contains NameJobTitle, Tabs, Random

import React, { Component } from 'react'
import Random from './Random'

import './style/header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Random />
        <div id="name">shmoo-ritchie</div>
        <div>Full-Stack Web Developer</div>
      </div>
    )
  }
}
