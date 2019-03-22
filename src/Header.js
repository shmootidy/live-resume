// contains NameJobTitle, Tabs, Random

import React, { Component } from 'react'
import Random from './Random'
import NameTitle from './NameTitle'
import Tabs from './Tabs'

import './style/header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Random />
        <NameTitle />
        <Tabs />
      </div>
    )
  }
}
