// contains random faux-acronym and heart

import React, { Component } from 'react'

import './random.scss'

export default class Random extends Component {
  displayQualities() {
    const randomQualities = ['Thorough', 'Proactive', 'Concise', 'Reliable', 'Approachable', 'Creative', 'Resourceful', 'Knowledgeable']
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
    return randomQualities.map((quality, i) => {
      if (i < 4) {
        return <span key={ quality }>{ quality }</span>
      }
    })
  }

  render() {
    const qualitiesToDisplay = this.displayQualities()
    return (
      <div id="random">
        <div>
          <span id="heart">❤</span>
          <span id="random-msg">Messy Hair • Tidy Code</span>
        </div>
        <div>{ qualitiesToDisplay }</div>
      </div>
    )
  }
}
