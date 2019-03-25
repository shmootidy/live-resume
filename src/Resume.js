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
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    console.log(window.scrollY)
    // summary - 140
    // projects - 485
    // education - 2270
    // experience - 2350
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    // const contentAnchors = ['summary-content', 'projects-content', 'education-content', 'experience-content']
    // const selectedContent = document.getElementById(contentAnchors[tabIndex])
    // selectedContent.scrollIntoView()
    const scrollLocations = [140, 485, 2270, 2350]
    window.scrollTo(0, scrollLocations[tabIndex])
  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
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
