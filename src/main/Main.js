import React, { Component } from 'react'
import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'
import Tabs from './name-title-tabs/Tabs'
import NameTitle from './name-title-tabs/NameTitle'
import Contact from './sidebar/Contact'

import './main.scss'
import './_responsive.scss'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameTitleHeight: '94',
      tabs: [
        { text: 'Readme',
          active: true,
          position: null
         },
        { text: 'Projects',
          active: false,
          position: null
        },
        { text: 'Work',
          active: false,
          position: null
        },{ 
          text: 'Education',
          active: false,
          position: null
        }
      ]
    }
    this.tabToggle = this.tabToggle.bind(this)
    this.scrollToContent = this.scrollToContent.bind(this)
    this.setContentPositions = this.setContentPositions.bind(this)
    this.setHeaderHeight = this.setHeaderHeight.bind(this)
    this.handleResize = this.handleResize.bind(this)
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
    // const scrollLocation = this.state.tabs[tabIndex].position
    // window.scrollTo(0, scrollLocation)
    this.setState( { visibleTab: tabIndex } )
  }

  // setState on content positions 1ms after componentDidMount
  setContentPositions() {
    const nameTitleHeight = this.state.nameTitleHeight
    const summary = 0//document.getElementById('summary').offsetTop
    const projects = 0//document.getElementById('projects').offsetTop
    const education = 0//document.getElementById('education').offsetTop
    const experience = 0//document.getElementById('experience').offsetTop
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
    this.setHeaderHeight()
    this.setContentPositions()
  }

  componentDidMount() {
    setTimeout(this.setHeaderHeight, 100) // delay is necessary for accuracy
    setTimeout(this.setContentPositions, 100) // fire setHeaderHeight before setContentPositions to ensure position is set with nameTitleHeight
    window.addEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div>
        <NameTitle 
          tabs={this.state.tabs}
          tabToggle={this.tabToggle} 
          scrollToContent={this.scrollToContent} 
          tabsPosition={this.state.nameTitleHeight}
        />
        <div 
        className="flex flex-column" 
        id="main" 
        >
          <span 
            id="tabs" 
            className="ntt" 
          >
            <Tabs 
              tabs={this.state.tabs} 
              tabToggle={this.tabToggle} 
              scrollToContent={this.scrollToContent}
              position={this.state.nameTitleHeight} 
            />
          </span>
          <Contact />
          <Content visibleTab={this.state.visibleTab ? this.state.visibleTab : 0 } />
        </div>
      </div>
    )
  }
}    
