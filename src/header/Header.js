// contains Random

import React, { Component } from 'react'
import Random from './Random'
import ShmooSearch from './ShmooSearch';

import './header.scss'

export default class Header extends Component {
  render() {
    return (
    <div id="header">
      <Random />
      <ShmooSearch />
    </div>
    )
  }
}
