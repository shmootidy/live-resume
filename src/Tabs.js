import React, { Component } from 'react'

import './style/tabs.css'

export default class Tabs extends Component {
  render() {
    return (
      <ul class="flex">
        <li class="tab1">Readme</li>
        <li class="tab2 not-selected">Projects</li>
        <li class="tab3 not-selected">Education</li>
        <li class="tab4 not-selected">Experience</li>
      </ul>
    )
  }
}