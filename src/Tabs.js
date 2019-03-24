import React, { Component } from 'react'
import Tab from './Tab'

import './style/tabs.css'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        {
          text: 'Readme',
          active: true,
          href: '#summary',
        },
        { 
          text: 'Projects',
          active: false,
          href: '#projects',
        }, 
        {
          text: 'Education',
          active: false,
          href: '#education',
        },
        {
          text: 'Experience',
          active: false,
          href: '#experience',
        }
      ]
    }
    this.tabToggle = this.tabToggle.bind(this)
  }
  
  tabToggle(tabIndex) {
    let tabs = this.state.tabs
    tabs[tabIndex].active = true
    tabs.map((tab, index) => {
      if (index !== tabIndex) tab.active = false
      return null
    })
    this.setState( tabs )
  }

  render() {
    return (
      <ul className="flex">
        <Tab tabs={this.state.tabs} method={this.tabToggle}/>
      </ul>
    )
  }
}
