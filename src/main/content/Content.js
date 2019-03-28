// contains Summary, Experience, Education, Projects, NameTitleTabs

import React from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import NameTitleTabs from './NameTitleTabs'

import '../style/content.css'

const Content = (props) => {
  return (
    <content>
      <NameTitleTabs tabs={props.tabs} tabToggle={props.tabToggle} scrollToContent={props.scrollToContent} />
      <Summary />
      <Projects />
      <Education />
      <Experience />
    </content>
  )
}

export default Content
