// contains random faux-acronym and heart

import React, { Component } from 'react'

import './random.scss'

export default class Random extends Component {
  render() {
    return (
      <div id="random">
        <span id="heart">❤</span>
        <span id="random-msg">Messy Hair • Tidy Code</span>
      </div>
    )
  }
}
