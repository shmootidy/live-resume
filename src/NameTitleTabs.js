// contains Tabs 

import React, { Component } from 'react'
import Tabs from './Tabs'

export default class NameTitleTabs extends Component {
  render() {
    return (
      <div id="name-title-tabs" className="flex flex-column">
        <span id="name">shmoo-ritchie</span>
        <span id="title">Full-stack <span className="green">Web</span> Developer</span>
        <Tabs />
      </div>
    )
  }
}
