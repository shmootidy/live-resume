import React from 'react'
import TabsResponsive from './Tabs'
// import ContactResponsive from '../sidebar/Contact'

import './name-title-tabs.css'

const NameTitle = (props) => {
  return (
    <span className="flex space-between sticky name-title responsive-padding">
      <span className="flex flex-column">
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
