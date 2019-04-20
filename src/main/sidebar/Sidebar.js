// contains Contact, CurrentObsession, Skills

import React, { Component } from 'react'
import Contact from './Contact'
import Skills from './Skills'
import CurrentObsession from './CurrentObsession'

import './sidebar.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentObsession: 'React',
      skills: {
        'general practices': ['DRY code', 'RESTful applications', 'Helpful commit messages'],
        'web technologies': ['APIs (Wikipedia, Yelp, Github)', 'AJAX'],
        'authentication': ['bcrpyt', 'session-cookies', 'md5'],
        'middleware': ['body-parser', 'Babel'],
        'languages': ['JavaScript', 'Ruby', 'HTML5', 'CSS3', 'SQL'],
        'libraries & frameworks': ['ReactJS', 'jQuery', 'Rails', 'Knex', 'CraftyJS', 'EJS', 'SASS', 'JSX'],
        'servers / routing': ['Express', 'Rails', 'React', 'Websocket', 'Axios'],
        'testing': ['Mocha / Chai', 'RSpec'],
        'database': ['PostgreSQL', 'mySqlite', 'MongoDB'],
        'web debug tools': ['Chrome dev tools'],
        'version control': ['git', 'github'],
        'package managers': ['node', 'yarn', 'gems'],
      },
    }
  }

  render() {
    const sidebarStickyStyle = {
      top: this.props.position + 32 + 10
    }

    return (
      <div id="sidebar">
        <div style={sidebarStickyStyle} className="sticky">
          <Contact />
          <CurrentObsession currentObsession={this.state.currentObsession} />
          <Skills skills={this.state.skills} />
        </div>
      </div>
    )
  }
}
