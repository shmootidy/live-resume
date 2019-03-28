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
// alternate links:
  // http://lil-abner.com/the-shmoo/
  // https://en.wikipedia.org/wiki/Shmoo
  // https://hubpages.com/entertainment/The-History-of-the-Shmoo