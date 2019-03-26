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
      // headerHeight: 0,
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
    this.handleScroll = this.handleScroll.bind(this) // for testing
  }

  // for testing only
  handleClick(e) {
    // console.log(`screenY: ${e.screenY}`)
    // console.log(`clientY: ${e.clientY}`)
    console.log(`pageY: ${e.pageY}`)
    console.log('offsetTop of #education:', document.getElementById('education').offsetTop) // 1573

    // console.log(e)
  }

  handleScroll() {
    // const summaryPosition = this.state.tabs[0].position
    const projectsPosition = this.state.tabs[1].position
    const educationPosition = this.state.tabs[2].position
    const experiencePosition = this.state.tabs[3].position
    if (window.scrollY < projectsPosition) {
      this.tabToggle(0)
    } 
    if (window.scrollY >= projectsPosition && window.scrollY < educationPosition) {
      this.tabToggle(1)
    }
    if (window.scrollY >= educationPosition && window.scrollY < experiencePosition) {
      this.tabToggle(2)
    }
    if (window.scrollY >= experiencePosition) {
      this.tabToggle(3)
    }
    // console.log(window.scrollY)
  }

  componentDidMount() {
    // set position of each content element in state
    // console.log(document.getElementById('summary')) // clientHeight; clientTop; offsetHeight; offsetTop; scrollHeight; scrollTop; 
    
    // let contentPosition = this.state.tabs.map((tab, i) => {
    //   tab.position = positions[i]
    //   return null
    // })
    // this.setState(contentPosition)
    // console.log('component has mounted:', this.state.tabs.map(tab => tab.text + ': ' + tab.position))
    // console.log('header:', this.state.headerHeight)
    
    window.addEventListener('scroll', this.handleScroll);
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

  // scrollToContent(tabIndex) {
  //   const scrollLocations = [140, 485, 2270, 2350]
  //   window.scrollTo(0, scrollLocations[tabIndex])
  // }

  render() {
    return (
      <div onScroll={this.handleScroll} onClick={this.handleClick}>
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
