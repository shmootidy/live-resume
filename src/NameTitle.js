import React, { Component } from 'react'

export default class NameTitle extends Component {
  render() {
    return (
      <span>
        <div id="initials">sr</div>
        <span id="name-title" className="flex flex-column">
          <span id="name">shmoo-ritchie</span>
          <span id="title">Full-stack <span className="green">Web</span> Developer</span>
        </span>
      </span>
    )
  }
}
