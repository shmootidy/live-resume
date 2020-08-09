import React, { useState } from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Skills from '../sidebar/Skills'
import Contact from '../sidebar/Contact'

import './content.scss'

const Content = (props) => {
  const [ previousTab, setPreviousTab ] = useState(props.visibleTab)
  const [ hideContact, setHideContact ] = useState(true)

  const visibleTab = props.visibleTab
  if (previousTab !== visibleTab) {
    setPreviousTab(visibleTab)
    if (props.mainTab) setHideContact(true)
  }
  
  if (visibleTab === 0) {
    return (
      <content>
        <Contact 
          hideContact={hideContact} 
          toggleHideContact={setHideContact} 
        />
        <div className="content">
          <Summary />
          <Skills />
        </div>
      </content>
    )
  } else if (visibleTab === 1) {
    return (
      <content>
        <Contact 
          hideContact={hideContact} 
          toggleHideContact={setHideContact} 
        />
        <div className="content">
          <Projects />
        </div>
      </content>
    )
  } else if (visibleTab === 2) {
    return (
      <content>
        <Contact 
          hideContact={hideContact} 
          toggleHideContact={setHideContact} 
        />
        <div className="content">
          <Experience />
        </div>
      </content>
    )
  } else if (visibleTab === 3) {
    return (
      <content>
        <Contact 
          hideContact={hideContact} 
          toggleHideContact={setHideContact} 
        />
        <div className="content">
          <Education />
        </div>
      </content>
    )
  } else {
    return (
      <div>Whoops! Something went wrong in Content.js</div>
    )
  }
}

export default Content
