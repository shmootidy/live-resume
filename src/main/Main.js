import React, { Component } from 'react'
 
import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'
import NameTitleTabs from './name-title-tabs/NameTitleTabs'

import './main.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameTitleTabsHeight: null,
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
    this.setContentPositions = this.setContentPositions.bind(this)
    this.setHeaderHeight = this.setHeaderHeight.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  // for testing only
  handleClick(e) {
    console.log(`pageY: ${e.pageY}`)
    console.log('nameTitleTabsHeight:', document.getElementById('header').offsetHeight) 
    // console.log('summary:', document.getElementById('summary').offsetTop) 
    // console.log('projects:', document.getElementById('projects').offsetTop) 
    // console.log('education:', document.getElementById('education').offsetTop) 
    // console.log('experience:', document.getElementById('experience').offsetTop) 
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
    const scrollLocation = this.state.tabs[tabIndex].position
    window.scrollTo(0, scrollLocation)
  }

  // trigger tabToggle at certain scroll points
  handleScroll() {
    // const summaryPosition = this.state.tabs[0].position
    const projectsPosition = this.state.tabs[1].position
    const educationPosition = this.state.tabs[2].position
    const experiencePosition = this.state.tabs[3].position
    if (window.scrollY < projectsPosition) this.tabToggle(0)
    if (window.scrollY >= projectsPosition && window.scrollY < educationPosition) this.tabToggle(1)
    if (window.scrollY >= educationPosition && window.scrollY < experiencePosition) this.tabToggle(2)
    if (window.scrollY >= experiencePosition) this.tabToggle(3)
  }

  // setState on content positions 1ms after componentDidMount
  setContentPositions() {
    const nameTitleTabsHeight = this.state.nameTitleTabsHeight
    const summary = document.getElementById('summary').offsetTop
    const projects = document.getElementById('projects').offsetTop
    const education = document.getElementById('education').offsetTop
    const experience = document.getElementById('experience').offsetTop
    const currentPositions = [summary, projects, education, experience]

    let tabs = this.state.tabs
    currentPositions.forEach((position, i) => {
      tabs[i].position = position - nameTitleTabsHeight
    })
    // this.setState( tabs ) // it seems this is adding another object to state... what is with my syntax?
  }

  setHeaderHeight() {
    // const nameTitleTabsHeight = document.getElementById('name-title-tabs').offsetHeight
    // this.setState({ nameTitleTabsHeight })
    // console.log(this.state)
  }

  handleResize() {
    this.setHeaderHeight()
    this.setContentPositions()
  }

  componentDidMount() {
    setTimeout(this.setHeaderHeight, 100) // delay is necessary for accuracy
    setTimeout(this.setContentPositions, 100) // fire setHeaderHeight before setContentPositions to ensure position is set with nameTitleTabsHeight
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div onScroll={this.handleScroll} className="flex flex-column">
        <div id="ntt">
          <NameTitleTabs 
            tabToggle={this.tabToggle} 
            scrollToContent={this.scrollToContent} 
            tabs={this.state.tabs} />
        </div>
        <div id="content-sidebar" className="flex">
          <Content />
          <Sidebar position={this.state.nameTitleTabsHeight} />
        </div>
      </div>
    )
  }
}    
