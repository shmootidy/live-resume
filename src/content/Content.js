// contains Summary, Experience, Education, Projects

import React from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

import '../style/content.css'

const Content = (props) => {
  return (
    <content>
      <div id="summary-content"></div><Summary />
      <div id="projects-content"></div><Projects />
      <div id="education-content"></div><Education />
      <div id="experience-content"></div><Experience />
    </content>
  )
}

export default Content
