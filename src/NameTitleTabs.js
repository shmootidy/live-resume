// contains Tabs 

import React from 'react'
import Tabs from './Tabs'

const NameTitleTabs = (props) => {
  return (
    <div id="name-title-tabs" className="flex flex-column">
      <span id="name">susannah-ritchie</span>
      <span id="title">Full-stack <span className="green">Web</span> Developer</span>
      <Tabs tabs={props.tabs} tabToggle={props.tabToggle} />
    </div>
  )
}

export default NameTitleTabs
