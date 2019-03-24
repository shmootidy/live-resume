// contains Tabs 

import React, { Component } from 'react'
import Tabs from './Tabs'

export default class NameTitle extends Component {
  render() {
    return (
      <span>
        <span id="name-title" className="flex flex-column">
          <span id="name">shmoo-ritchie</span>
          <span id="title">Full-stack <span className="green">Web</span> Developer</span>
        </span>
        <Tabs />
      </span>
    )
  }
}
