// contains Tab

import React, { Component } from 'react'
import Tab from './Tab'

import './style/tabs.css'

const Tabs = (props) => {
  return (
    <ul className="flex">
      <Tab tabs={props.tabs} tabToggle={props.tabToggle}/>
    </ul>
  )
}

export default Tabs
