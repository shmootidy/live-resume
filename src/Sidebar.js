// contains Contact, CurrentObsession, Skills

import React, { Component } from 'react'
import Contact from './Contact'
import Skills from './Skills'
import CurrentObsession from './CurrentObsession'

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <Contact />
        <CurrentObsession />
        <Skills />
      </div>
    )
  }
}
