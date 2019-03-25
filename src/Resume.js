// this is the top level component

import React, { Component } from 'react'

import Header from './Header'
import Content from './Content'
import Sidebar from './Sidebar'
import Footer from './Footer'

import './style/resume.css'

export default class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { text: 'Readme',
          active: true },
        { text: 'Projects',
          active: false }, 
        { text: 'Education',
          active: false },
        { text: 'Experience',
          active: false }
      ]
    }
    this.tabToggle = this.tabToggle.bind(this)
  }

  tabToggle(tabIndex) {
    // change which tag is active
    let tabs = this.state.tabs
    tabs[tabIndex].active = true
    tabs.map((tab, index) => {
      if (index !== tabIndex) tab.active = false
      return null
    })
    this.setState( tabs )
    // tabIndex: 0 - Readme; 1 - Projects; 2 - Education; 3 - Experience
    const contentAnchors = ['summary-content', 'projects-content', 'education-content', 'experience-content']
    const selectedContent = document.getElementById(contentAnchors[tabIndex])
    selectedContent.scrollIntoView()
  }

  render() {
    return (
      <div>
        <Header tabs={this.state.tabs} tabToggle={this.tabToggle} />
        <div className="margin">
          <div className="flex">
            <Content tabs={this.state.tabs} />
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}    
