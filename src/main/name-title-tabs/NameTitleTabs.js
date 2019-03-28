// contains Tabs 

import React from 'react'
import Tabs from './Tabs'

import './name-title-tabs.css'

const NameTitleTabs = (props) => {
  return (
    <div id="name-title-tabs" className="flex flex-column">
      <span id="name-title" className="flex flex-column sticky responsive-padding">
        <span id="name">susannah-ritchie</span>
        <span id="title">Full-stack <span className="green">Web</span> Developer • Vancouver, BC</span>
      </span>
      <Tabs tabs={props.tabs} tabToggle={props.tabToggle} scrollToContent={props.scrollToContent} />
    </div>
  )
}

export default NameTitleTabs
