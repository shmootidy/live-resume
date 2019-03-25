// contains Random, NameTitleTabs

import React from 'react'
import Random from './Random'
import NameTitleTabs from './NameTitleTabs'

import './style/header.css'

const Header = (props) => {
  return (
    <div id="header" className="sticky">
      <Random />
      <div className="header-section">
        <span id="shmoo">shmoo</span>
        <span>What is a Shmoo anyway?</span>
      </div>
      <NameTitleTabs tabs={props.tabs} tabToggle={props.tabToggle} />
    </div>
  )
}

export default Header
