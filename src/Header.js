// contains Random, NameTitleTabs

import React, { Component } from 'react'
import Random from './Random'
import NameTitleTabs from './NameTitleTabs'

import './style/header.css'

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="sticky">
        <Random />
        <div id="initials">sr</div>
        <NameTitleTabs />
      </div>
    )
  }
}
