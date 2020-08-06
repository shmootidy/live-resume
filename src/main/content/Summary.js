import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Summary = (props) => {
  const style = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '.5rem 0 1rem',
    color: 'rgba(0,0,0,.8)'
  }
  
  return (
    <div>
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
      <div id="summary">
        <h1 className='content-title'>shmoo-ritchie</h1>
        <p>Hi, I'm Shmoo! Thanks for visiting my live resume, designed to mimic the style of the popular developer resource, npm.</p>
        <p>Have you got an interesting project or position for a driven problem-solver? Want to work with an enthusiastic, reliable developer? <a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!"><span className="highlight">Get in touch!</span></a></p>
        <p>Scroll down to see a list of some of my developer skills. (My soft skills are good too, promise!) To see the projects I've worked on and my employment history, click on the coloured tabs above.</p>
      </div>
    </div>
  )
}

export default Summary
