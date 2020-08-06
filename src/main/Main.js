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
    this.setState( { visibleTab: tabIndex } )
  }

  setHeaderHeight() {
    // const nameTitleHeight = document.getElementById('name-title').offsetHeight
    const nameTitleHeight = document.getElementsByClassName('name-title')[0].offsetHeight
    const nameTitleTabsHeight = document.getElementById('tabs').offsetHeight + nameTitleHeight
    this.setState({ nameTitleHeight, nameTitleTabsHeight })
  }

  handleResize() {
    this.setHeaderHeight()
  }

  componentDidMount() {
    setTimeout(this.setHeaderHeight, 100) // delay is necessary for accuracy
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
