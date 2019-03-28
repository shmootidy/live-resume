import React from 'react'
import TabsResponsive from './Tabs'
import ContactResponsive from '../sidebar/Contact'

import './name-title-tabs.css'

const NameTitle = (props) => {
  return (
    <span className="flex flex-column sticky name-title responsive-padding">
      <span id="name">susannah-ritchie</span>
      <span id="title">Full-stack <span className="green">Web</span> Developer • Vancouver, BC</span>
  </span>
  )
}

export default NameTitle
