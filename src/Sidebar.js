// contains Contact, CurrentObsession, Skills

import React, { Component } from 'react'
import Contact from './Contact'
import Skills from './Skills'
import CurrentObsession from './CurrentObsession'

import './style/sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div id="sidebar-sticky" className="sticky">
          <Contact />
          <CurrentObsession />
          <Skills />
        </div>
      </div>
    )
  }
}
