import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  isContactCollapsed: boolean
  onToggleCollapseContact: (value: boolean) => void
}

export default function Contact(props: IProps) {
  const { isContactCollapsed, onToggleCollapseContact } = props

  const [contactClass, setClass] = useState('see-more')
  const [hideContact, setHideContact] = useState(true)

  useEffect(() => {
    if (isContactCollapsed !== hideContact) {
      collapseContact()
    }
  })

  function handleToggle() {
    if (isContactCollapsed) {
      onToggleCollapseContact(false)
      setHideContact(false)
      setClass('see-less')
    } else {
      collapseContact()
    }
  }
  function collapseContact() {
    onToggleCollapseContact(true)
    setHideContact(true)
    setClass('see-more')
  }

  return (
    <div>
      <div style={{ margin: 0 }}>
        <SidebarSubtitle>
          Contact{' '}
          <button
            onClick={handleToggle}
            style={{ border: 0, background: 'white', color: 'inherit' }}
            className='see-more'
          >
            {`[ see ${isContactCollapsed ? 'less -' : 'more +'} ]`}
          </button>
        </SidebarSubtitle>
        <a
          href='mailto:shmooritchie@gmail.com?subject=I saw your resume!'
          className='contact-bar'
          id='email'
        >
          <img
            className='contact-icon absolute'
            alt='Email icon'
            src={require('../../assets/email.png')}
          />
          <span className='contact-info'>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: 12, opacity: 0.3, marginRight: 6 }}
            />
            shmooritchie@gmail.com
          </span>
        </a>
      </div>
      <div className={'contact collapseable-contact ' + contactClass}>
        <div style={{ marginLeft: '.25rem' }}>
          <div style={{ borderBottom: '1px solid #e1e1e1' }}>
            <div className='sidebar-subtitle'>Linked In</div>
            <ContactLink
              href='https://www.linkedin.com/in/shmoo-ritchie'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
              <span style={{ marginLeft: '.5rem' }}>
                linkedin.com/in/shmoo-ritchie
              </span>
            </ContactLink>
          </div>
          <div style={{ borderBottom: '1px solid #e1e1e1' }}>
            <div className='sidebar-subtitle'>Repository</div>
            <ContactLink
              href='https://www.github.com/shmootidy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
              <span style={{ marginLeft: '.5rem' }}>github.com/shmootidy</span>
            </ContactLink>
          </div>
          {/* <div>
            <div className="sidebar-subtitle">Collaborators</div>
            <div style={style}>
              <img style={{width: '42px', height: '42px', minWidth: '42px', borderRadius: '4%'}} alt="avatar" src={require('../../assets/headshot.png')} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

const SidebarSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  margin: 1rem 0 0.875rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 1rem;

  .see-more {
    border: 0;
    background: white;
    color: inherit;
    @media (min-width: 960px) {
      display: none;
    }
  }
`

const ContactLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  color: rgba(0, 0, 0, 0.8);
`
