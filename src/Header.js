// contains Random, NameTitleTabs

import React from 'react'
import Random from './Random'
import NameTitleTabs from './NameTitleTabs'

import './style/header.css'

const Header = (props) => {
  return (
    <div id="header" className="sticky">
      <Random />
      <div id="initials">sr</div>
      <NameTitleTabs tabs={props.tabs} tabToggle={props.tabToggle} />
    </div>
  )
}

export default Header
