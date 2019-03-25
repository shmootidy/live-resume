import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="sidebar-subtitle">contact</div>
        <div className="contact-bar" id="phone">
          <img className="contact-icon absolute" alt="Phone icon" src={require("./assets/phone.png")} />
          <span className="contact-info">> 604.616.0247</span>
        </div>
        <div className="contact-bar" id="email">
          <img className="contact-icon absolute" alt="Email icon" src={require("./assets/email.png")} />
          <span className="contact-info">> shmooritchie@gmail.com</span>
        </div>
        <div className="contact-bar" id="linked-in">
          <img className="contact-icon absolute" alt="Linked-in icon" src={require("./assets/linked-in.png")} />
          <span className="contact-info">> in/shmoo-ritchie</span>
        </div>
        <div className="contact-bar" id="github">
          <img className="contact-icon absolute" alt="Github icon" src={require("./assets/github.png")} />
          <span className="contact-info">> /shmootidy</span>
        </div>
      </div>
    )
  }
}
