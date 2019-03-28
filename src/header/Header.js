// contains Random

import React, { Component } from 'react'
import Random from './Random'
import ShmooSearch from './ShmooSearch';

import '../style/header.css'

export default class Header extends Component {
  render() {
    return (
    <div id="header" className="sticky">
      <Random />
      <ShmooSearch />
    </div>
    )
  }
}
