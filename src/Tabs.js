import React, { Component } from 'react'
import './style/tabs.css'
import Tab from './Tab'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        {
          text: 'Readme',
          active: true,
        },
        { 
          text: 'Projects',
          active: false,
        }, 
        {
          text: 'Education',
          active: false,
        },
        {
          text: 'Experience',
          active: false,
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
    })
    this.setState( tabs )
  }

  render() {
    return (
      <div className="margin">
        <ul className="flex">
          <Tab content={this.state.tabs} method={this.tabToggle}/>
        </ul>
      </div>
    )
  }
}
