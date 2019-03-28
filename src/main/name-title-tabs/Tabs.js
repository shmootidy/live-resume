// contains Tab

import React from 'react'
import Tab from './Tab'
import ContactResponsive from '../sidebar/Contact'

import './tabs.css'

const Tabs = (props) => {
  return (
    <div className="flex">
      <ul className="flex">
        <Tab 
          tabs={props.tabs} 
          tabToggle={props.tabToggle} 
          scrollToContent={props.scrollToContent} 
        />
      </ul>
      {/* <div id="contact-responsive"><ContactResponsive /></div> */}
    </div>
  )
}

export default Tabs
