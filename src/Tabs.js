// contains Tab

import React, { Component } from 'react'
import Tab from './Tab'

import './style/tabs.css'

export default class Tabs extends Component {
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
