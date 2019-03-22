import React, { Component } from 'react'
import './style/tabs.css'

export default class Tabs extends Component {
  render() {
    return (
      <div className="margin">
        <ul className="flex">
          <li className="tab1">Readme</li>
          <li className="tab2 not-selected">Projects</li>
          <li className="tab3 not-selected">Education</li>
          <li className="tab4 not-selected">Experience</li>
        </ul>
      </div>
    )
  }
}
