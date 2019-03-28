// contains Tab

import React from 'react'
import Tab from './Tab'

import './tabs.css'

const Tabs = (props) => {
  const tabsStickyPosition = {
    top: props.position + 'px'
  }

  return (
    <div>
      <ul className="flex" style={tabsStickyPosition}>
        <Tab 
          tabs={props.tabs} 
          tabToggle={props.tabToggle} 
          scrollToContent={props.scrollToContent} 
        />
      </ul>
    </div>
  )
}

export default Tabs
