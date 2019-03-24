// contains Summary, Experience, Education, Projects

import React, { Component } from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

export default class Content extends Component {
  render() {
    return (
      <content>
        <Summary />
        <Projects />
        <Education />
        <Experience />
      </content>
    )
  }
}
