import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faAt } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  isContactCollapsed: boolean
  onToggleCollapseContact: (value: boolean) => void
}

export default function Contact(props: IProps) {
  const { isContactCollapsed, onToggleCollapseContact } = props

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
    } else {
      collapseContact()
    }
  }

  function collapseContact() {
    onToggleCollapseContact(true)
    setHideContact(true)
  }

  return (
    <div>
      <div style={{ margin: 0 }}>
        <SidebarSubtitle>
          Contact{' '}
          <SeeMoreButton onClick={handleToggle}>
            {`[ see ${isContactCollapsed ? 'more +' : 'less -'} ]`}
          </SeeMoreButton>
        </SidebarSubtitle>
        <EmailBarLink
          href='mailto:shmooritchie@gmail.com?subject=I saw your resume!'
          id='email'
        >
          <span
            className='at-icon' // this one is new
          >
            <FontAwesomeIcon
              icon={faAt}
              style={{ height: 20, margin: 'auto' }}
            />
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: 10,
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: 12, opacity: 0.3, marginRight: 6 }}
            />
            shmooritchie@gmail.com
          </span>
        </EmailBarLink>
      </div>
      <CollapseableContact
        className={isContactCollapsed ? 'see-more' : 'see-less'} // these are fine too
      >
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
        </div>
      </CollapseableContact>
    </div>
  )
}

const SidebarSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  margin: 1rem 0 0.875rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  font-size: 1rem;
`

const SeeMoreButton = styled.button`
  border: 0;
  background: white;
  color: inherit;
  @media (min-width: 960px) {
    display: none;
  }
`

const ContactLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  color: rgba(0, 0, 0, 0.8);
`

const CollapseableContact = styled.div`
  transition: max-height 0.2s ease-out;
  background: white;
  overflow: hidden;

  &.see-more {
    max-height: 0;
    @media (min-width: 960px) {
      max-height: unset;
    }
  }
  &.see-less {
    max-height: 345px;
  }
`

const EmailBarLink = styled.a`
  border: 1px #e8e8e8 solid;
  font-family: 'Fira Mono';
  max-width: 95vw;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 0px;
  border-radius: 0.25rem;
  position: relative;
  display: flex;
  height: 35px;

  .at-icon {
    color: #fff;
    background: #e1e1e1;
    width: 35px;
    display: flex;
    align-content: center;
  }
`
