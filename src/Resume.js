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
          active: true,
          position: null
         },
        { text: 'Projects',
          active: false,
          position: null
         }, 
        { text: 'Education',
          active: false,
          position: null
         },
        { text: 'Experience',
          active: false,
          position: null
         }
      ]
    }
    this.tabToggle = this.tabToggle.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    if (window.scrollY >= 0 && window.scrollY < 485) {
      this.tabToggle(0)
    } 
    if (window.scrollY >= 485 && window.scrollY < 2270) {
      this.tabToggle(1)
    }
    if (window.scrollY >= 2270 && window.scrollY < 2350) {
      this.tabToggle(2)
    }
    if (window.scrollY >= 2350) {
      this.tabToggle(3)
    }
    // console.log(window.scrollY)
    // summary - 140
    // projects - 485
    // education - 2270
    // experience - 2350
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const summary = document.getElementById('summary').getBoundingClientRect().top
    const projects = document.getElementById('projects').getBoundingClientRect().top
    const education = document.getElementById('education').getBoundingClientRect().top
    const experience = document.getElementById('experience').getBoundingClientRect().top
    const positions = [summary, projects, education, experience]
    let contentPosition = this.state.tabs.map((tab, i) => {
      tab.position = positions[i]
    })
    this.setState(contentPosition)
    console.log(this.state)
    // console.log('summary', summary.top)
    // console.log('projects', projects.top)
    // console.log('education', education.top)
    // console.log('experience', experience.top)
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

    // this.scrollToContent(tabIndex) // commented out to avoid recursion
  }

  scrollToContent(tabIndex) {
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
