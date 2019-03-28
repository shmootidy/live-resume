// contains Random, NameTitleTabs

import React, { Component } from 'react'
import Random from './Random'
import NameTitleTabs from './NameTitleTabs'
import ShmooSearch from './ShmooSearch';

import '../style/header.css'

export default class Header extends Component {


  render() {
    return (
    <div id="header" className="sticky">
      <Random />
      <ShmooSearch />
      <NameTitleTabs tabs={this.props.tabs} tabToggle={this.props.tabToggle} scrollToContent={this.props.scrollToContent} />
    </div>
    )
  }
}
