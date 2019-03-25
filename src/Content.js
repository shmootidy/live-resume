// contains Summary, Experience, Education, Projects

import React, { Component } from 'react'
import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

import './style/content.css'

const Content = (props) => {
  let activeTab = props.tabs.filter(content => content.active === true)[0].text

  switch(activeTab) {
    case 'Readme':
      return <content><Summary /></content>
    case 'Projects':
      return <content><Projects /></content>
    case 'Education':
      return <content><Education /></content>
    case 'Experience':
      return <content><Experience /></content>
  }
}

export default Content
