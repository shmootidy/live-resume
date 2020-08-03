import React, { useEffect } from 'react'

const Contact = (props) => {
  useEffect(() => {
    const contact = document.querySelector('#sidebar .contact')
    const mobileContact = document.querySelector('.mobile-contact .contact')
    const observer = new IntersectionObserver(
      ([e]) => {
        // e.target.classList.toggle('at-top', e.intersectionRatio < 1)
        if (e.intersectionRect.top < 1) {
          mobileContact.classList.add('at-top', e.intersectionRatio < 1)
        } else {
          mobileContact.classList.remove('at-top', e.intersectionRatio < 1)
        }
      },
      {threshold: [1]}
    )
    observer.observe(contact)
  })

  return (
    <div className="contact">
      <div className="sidebar-subtitle">Contact</div>
      <a href="tel:+1-604-616-0247" className="contact-bar" id="phone">
        <img className="contact-icon absolute" alt="Phone icon" src={require("../../assets/phone.png")} />
        <span className="contact-info">> 604.616.0247</span>
      </a>
      <a href="mailto:shmooritchie@gmail.com" className="contact-bar" id="email">
        <img className="contact-icon absolute" alt="Email icon" src={require("../../assets/email.png")} />
        <span className="contact-info">> shmooritchie@gmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/shmoo-ritchie" target="_blank" rel="noopener noreferrer" className="contact-bar" id="linked-in">
        <img className="contact-icon absolute" alt="Linked-in icon" src={require("../../assets/linked-in.png")} />
        <span className="contact-info">> in/shmoo-ritchie</span>
      </a>
      <a href="https://www.github.com/shmootidy" target="_blank" rel="noopener noreferrer" className="contact-bar" id="github">
        <img className="contact-icon absolute" alt="Github icon" src={require("../../assets/github.png")} />
        <span className="contact-info">> /shmootidy</span>
      </a>
    </div>
  )
}

export default Contact
