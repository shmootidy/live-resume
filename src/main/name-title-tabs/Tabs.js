// contains Tab

import React from 'react'
import Tab from './Tab'

import './tabs.css'

const Tabs = (props) => {
  return (
    <ul className="flex">
      <Tab 
        tabs={props.tabs} 
        tabToggle={props.tabToggle} 
        scrollToContent={props.scrollToContent} 
      />
    </ul>
  )
}

export default Tabs
