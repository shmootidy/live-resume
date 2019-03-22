import React, { Component } from 'react'

import './style/tabs.css'

export default class Tabs extends Component {
  render() {
    return (
      <ul class="flex">
        <li id="tab1">Readme</li>
        <li id="tab2">Projects</li>
        <li id="tab3">Education</li>
        <li id="tab4">Experience</li>
      </ul>
    )
  }
}