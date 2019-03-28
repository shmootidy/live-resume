import React, { Component } from 'react'
 
import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'
import Tabs from './name-title-tabs/Tabs'
import NameTitle from './name-title-tabs/NameTitle'

import './main.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabsAreSticky: true,
      nameTitleHeight: '109',
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
    this.handleClick = this.handleClick.bind(this)
    this.setViewportWidth = this.setViewportWidth.bind(this)
  }

  // for testing only
  handleClick(e) {
    console.log(this.state)
    // console.log(`pageY: ${e.pageY}`)
    // console.log('nameTitleHeight:', document.getElementsByClassName('name-title')[0].offsetHeight)
    // console.log('this.state.nameTitleHeight:', this.state.nameTitleHeight)
    // console.log('nameTitleHeight:', document.getElementById('header').offsetHeight) 
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
    const nameTitleHeight = this.state.nameTitleHeight
    const summary = document.getElementById('summary').offsetTop
    const projects = document.getElementById('projects').offsetTop
    const education = document.getElementById('education').offsetTop
    const experience = document.getElementById('experience').offsetTop
    const currentPositions = [summary, projects, education, experience]

    let tabs = this.state.tabs
    currentPositions.forEach((position, i) => {
      tabs[i].position = position - nameTitleHeight
    })
  }

  setHeaderHeight() {
    // const nameTitleHeight = document.getElementById('name-title').offsetHeight
    const nameTitleHeight = document.getElementsByClassName('name-title')[0].offsetHeight
    const nameTitleTabsHeight = document.getElementById('tabs').offsetHeight + nameTitleHeight
    this.setState({ nameTitleHeight, nameTitleTabsHeight })
  }

  handleResize() {
    this.setViewportWidth()
    this.setHeaderHeight()
    this.setContentPositions()
  }

  setViewportWidth() {
    const viewportWidth = document.documentElement.clientWidth
    if (viewportWidth <= 960) {
      this.setState({ tabsAreSticky: false })
    } else {
      this.setState({ tabsAreSticky: true })
    }
  }

  componentDidMount() {
    setTimeout(this.setHeaderHeight, 100) // delay is necessary for accuracy
    setTimeout(this.setContentPositions, 100) // fire setHeaderHeight before setContentPositions to ensure position is set with nameTitleHeight
    this.setViewportWidth()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let tabsStickyPosition = this.state.tabsAreSticky ? { top: this.state.nameTitleHeight + 'px' } : { top: 'auto' }
    // let tabsStickyPosition = { top: this.state.nameTitleHeight }
    return (
      <div 
        onScroll={this.handleScroll} 
        className="flex flex-column" 
        id="main" 
        onClick={this.handleClick}
      >
        <NameTitle 
          tabs={this.state.tabs} 
          tabToggle={this.tabToggle} 
          scrollToContent={this.scrollToContent} 
        />
        <span 
          id="tabs" 
          className="sticky tabs-web"
          style={tabsStickyPosition}
        >
          <Tabs 
            tabs={this.state.tabs} 
            tabToggle={this.tabToggle} 
            scrollToContent={this.scrollToContent}
          />
        </span>
        <div id="content-sidebar" className="flex space-between responsive-padding">
          <Content />
          <Sidebar position={this.state.nameTitleTabsHeight} />
        </div>
      </div>
    )
  }
}    
