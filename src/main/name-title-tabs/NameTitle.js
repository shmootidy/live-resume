import React from 'react'
import TabsResponsive from './Tabs'

import './name-title-tabs.css'

const NameTitle = (props) => {
  return (
    <span className="ntt sticky name-title">
      <span className="flex flex-column responsive-padding">
        <span id="name">susannah-ritchie</span>
        <span id="title">Full-stack <span className="green">Web</span> Developer • Vancouver, BC</span>
      </span>
      <TabsResponsive 
        tabs={props.tabs} 
        tabToggle={props.tabToggle} 
        scrollToContent={props.scrollToContent}
      />
    </span>
  )
}

export default NameTitle
