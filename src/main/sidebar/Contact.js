import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = (props) => {
  const style = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '.5rem 0 1rem',
    color: 'rgba(0,0,0,.8)'
  }
  
  return (
    <div className="sidebar">
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
      <div style={{marginLeft: '.25rem'}}>
        <div style={{borderBottom: '1px solid #e1e1e1'}}>
          <div className="sidebar-subtitle">Linked In</div>
          <a style={style} href="https://www.linkedin.com/in/shmoo-ritchie" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            <span style={{marginLeft: '.5rem'}}>linkedin.com/in/shmoo-ritchie</span>
          </a>
        </div>
        <div style={{borderBottom: '1px solid #e1e1e1'}}>
          <div className="sidebar-subtitle">Repository</div>
          <a style={style} href="https://www.github.com/shmootidy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span style={{marginLeft: '.5rem'}}>github.com/shmootidy</span>
          </a>
        </div>
        <div>
          <div className="sidebar-subtitle">Collaborators</div>
          <div style={style}>
            <img style={{width: '42px', height: '42px', minWidth: '42px', borderRadius: '4%'}} alt="avatar" src={require('../../assets/headshot.png')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
