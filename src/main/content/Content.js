// contains Summary, Experience, Education, Projects, NameTitleTabs

import React from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

import './content.css'

const Content = (props) => {
  return (
    <content>
      <Summary />
      <Projects />
      <Education />
      <Experience />
    </content>
  )
}

export default Content
