import React, { Component } from 'react'

export default class Tab extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const tab = this.props.tabs.map((tab, index) => {
      let selectedClass = tab.active ? '' : 'not-selected'
      let tabClass = 'tab tab' + (index + 1).toString()
      let fullClass =  tabClass + ' ' + selectedClass
      let tabText = this.props.tabMobile ? tab.icon : tab.text
      return <li
          key={tab.text}
          className={fullClass} 
          onClick={() => { this.props.tabToggle(index); this.props.scrollToContent(index) }}>
          {tabText}
        </li>
    })
    return tab
  }
}
