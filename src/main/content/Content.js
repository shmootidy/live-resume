// contains Summary, Experience, Education, Projects, NameTitleTabs

import React from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Skills from '../sidebar/Skills'

import './content.scss'

const Content = (props) => {
  const visibleTab = props.visibleTab
  if (visibleTab === 0) {
    return (
      <content>
        <Summary />
        <Skills />
      </content>
    )
  } else if (visibleTab === 1) {
    return (
      <content>
        <Projects />
      </content>
    )
  } else if (visibleTab === 2) {
    return (
      <content>
        <Experience />
      </content>
    )
  } else if (visibleTab === 3) {
    return (
      <content>
        <Education />
      </content>
    )
  } else {
    return (
      <div>butts</div>
    )
  }
}

export default Content
