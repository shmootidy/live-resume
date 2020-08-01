// contains Tab

import React from 'react'
import Tab from './Tab'

import './tabs.scss'

const Tabs = (props) => {
  const tabsStickyPosition = {
    top: props.position + 'px'
  }

  return (
    <div>
      <ul className="flex tabs">
        <Tab 
          tabs={props.tabs}
          tabToggle={props.tabToggle} 
          scrollToContent={props.scrollToContent} 
          style={tabsStickyPosition}
        />
      </ul>
    </div>
  )
}

export default Tabs
