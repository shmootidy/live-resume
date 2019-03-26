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
    this.scrollToContent = this.scrollToContent.bind(this)
    this.handleScroll = this.handleScroll.bind(this) 
    this.getContentPositions = this.getContentPositions.bind(this)
  }

  // for testing only
  handleClick(e) {
    // console.log(`pageY: ${e.pageY}`)
    console.log('summary:', document.getElementById('summary').offsetTop) 
    console.log('projects:', document.getElementById('projects').offsetTop) 
    console.log('education:', document.getElementById('education').offsetTop) 
    console.log('experience:', document.getElementById('experience').offsetTop) 
  }

  // toggle active tag - change its color - THAT'S IT!
  tabToggle(tabIndex) {
    let tabs = this.state.tabs
    tabs[tabIndex].active = true
    tabs.map((tab, index) => {
      if (index !== tabIndex) tab.active = false
      return null
    })
    this.setState( tabs )
  }

    // scroll to appropriate place when tab is clicked
    // it may be better for the Content component to hold this method, bc I'd like for hitting the tabs to NOT scroll the top div. 
    // But first, I'll see if i can get the scrollToC and handleScroll to work as desired without getting all recursive on me
    scrollToContent(tabIndex) { 
      //
    }

    // trigger tabToggle at certain scroll points
    handleScroll() {
      //
    }

    // setState on content positions 1ms after componentDidMount
      // will the delay render accurate positions?
    getContentPositions() {
      const summary = document.getElementById('summary').offsetTop
      const projects = document.getElementById('projects').offsetTop
      const education = document.getElementById('education').offsetTop
      const experience = document.getElementById('experience').offsetTop
      const currentPositions = [summary, projects, education, experience]

      let tabs = this.state.tabs
      currentPositions.forEach((position, i) => {
        tabs[i].position = position
      })
      // this.setState( tabs ) // it seems this is adding another object to state... what is with my syntax?
      console.log(this.state)
    }

  componentDidMount() {
    setTimeout(this.getContentPositions, 100) // delay IS necessary for accuracy
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div onScroll={this.handleScroll} onClick={this.handleClick}>
        <Header tabs={this.state.tabs} tabToggle={this.tabToggle} />
        <div className="margin">
          <div className="flex">
            <Content tabs={this.state.tabs} scrollToContent={this.scrollToContent} />
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}    

/* GARBAGE DUMP OF POTENTIALLY REUSABLE CODE: 

  // set position of each content element in state
    // console.log(document.getElementById('summary')) // clientHeight; clientTop; offsetHeight; offsetTop; scrollHeight; scrollTop; 
    
    // 
    // console.log('component has mounted:', this.state.tabs.map(tab => tab.text + ': ' + tab.position))
    // console.log('header:', this.state.headerHeight)
    
    // // const summaryPosition = this.state.tabs[0].position
    // const projectsPosition = this.state.tabs[1].position
    // const educationPosition = this.state.tabs[2].position
    // const experiencePosition = this.state.tabs[3].position
    // if (window.scrollY < projectsPosition) {
    //   this.tabToggle(0)
    // } 
    // if (window.scrollY >= projectsPosition && window.scrollY < educationPosition) {
    //   this.tabToggle(1)
    // }
    // if (window.scrollY >= educationPosition && window.scrollY < experiencePosition) {
    //   this.tabToggle(2)
    // }
    // if (window.scrollY >= experiencePosition) {
    //   this.tabToggle(3)
    // }
    // console.log(window.scrollY)


  //   const scrollLocations = [140, 485, 2270, 2350]
  //   window.scrollTo(0, scrollLocations[tabIndex])

  // console.log(`screenY: ${e.screenY}`)
    // console.log(`clientY: ${e.clientY}`)
    // console.log('summary', summary.top)
    // console.log('projects', projects.top)
    // console.log('education', education.top)
    // console.log('experience', experience.top) */