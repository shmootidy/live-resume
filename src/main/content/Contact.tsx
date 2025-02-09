import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

interface IProps {
  isContactCollapsed: boolean
  onToggleCollapseContact: (value: boolean) => void
}

export const MAIL_TO = 'mailto:shmooritchie@gmail.com?subject=Hi, Shmoo :)'

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
        <ShmooCopyBar>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ fontSize: 12, opacity: 0.3, marginRight: 6 }}
          />
          <div style={{ flexGrow: 1, paddingLeft: 4 }}>
            shmooritchie@gmail.com
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText('shmooritchie@gmail.com')
            }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </ShmooCopyBar>
      </div>
      <CollapseableContact
        className={isContactCollapsed ? 'see-more' : 'see-less'}
      >
        <div style={{ marginLeft: '.25rem' }}>
          <div style={{ borderBottom: '1px solid #e1e1e1' }}>
            <SidebarSubtitle>Linked In</SidebarSubtitle>
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
            <SidebarSubtitle>Repository</SidebarSubtitle>
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
  transition: max-height 0.5s ease-out;
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
const ShmooCopyBar = styled.div`
  border: 1px #cccccc solid;
  padding: 10px 16px 10px 18px;
  border-radius: 5px;
  margin: 14px 0 16px;
  font-family: 'Fira Mono';
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 290px;

  button {
    cursor: pointer;
    border: none;
    background: none;
    color: rgba(0, 0, 0, 0.5);
  }
`
