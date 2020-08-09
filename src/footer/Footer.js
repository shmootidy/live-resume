import React from 'react'
import './footer.scss'

const Footer = (props) => {
  return (
    <div id="footer-container">
      {/* <div id="footer">❤</div> */}
      <div className="footer-content">
        <img src="#" className="footer-icon" />
        <div className="footer-column">
          <div className="footer-heading">Contact Me</div>
          <a href="mailto:shmooritchie@gmail.com">shmooritchie@gmail.com</a>
          <div>beep</div>
        </div>
      </div>
      <div id="footer-banner"></div>
    </div>
  )
}

export default Footer
