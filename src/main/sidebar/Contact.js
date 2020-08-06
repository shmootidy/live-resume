import React from 'react'

const Contact = (props) => {
  // useEffect(() => {
  //   const contact = document.querySelector('#main > .contact')
  //   const mobileContact = document.querySelector('.mobile-contact .contact')
  //   const observer = new IntersectionObserver(
  //     ([e]) => {
  //       if (e.boundingClientRect.top <= 0 && e.intersectionRatio < 1) {
  //         mobileContact.classList.add('at-top')
  //       } else {
  //         mobileContact.classList.remove('at-top')
  //       }
  //     },
  //     {threshold: [1]}
  //   )
  //   observer.observe(contact)
  // })

  return (
    <div>
      <div className="contact">
        <div className="sidebar-subtitle">Contact</div>
        <a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!" className="contact-bar" id="email">
          <img className="contact-icon absolute" alt="Email icon" src={require("../../assets/email.png")} />
          <span className="contact-info">> shmooritchie@gmail.com</span>
        </a>
        <a href="tel:+1-604-616-0247" className="contact-bar" id="phone">
          <img className="contact-icon absolute" alt="Phone icon" src={require("../../assets/phone.png")} />
          <span className="contact-info">> 604.616.0247</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
