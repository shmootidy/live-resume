// contains NameJobTitle, Tabs, Random

import React, { Component } from 'react'
import Random from './Random'

import './style/header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Random />
        <div id="initials">sr</div>
        <span id="name-title" class="flex flex-column">
          <span id="name">shmoo-ritchie</span>
          <span id="title">Full-Stack Web Developer</span>
        </span>
      </div>
    )
  }
}
