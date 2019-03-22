// contains NameJobTitle, Tabs, npmRandom

import React, { Component } from 'react'
import Random from './Random'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Random />
        <div>shmoo-ritchie</div>
        <div>Full-Stack Web Developer</div>
      </div>
    )
  }
}
