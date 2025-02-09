import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'

import { ColouredBanner } from '../SharedComponents/StyledComponents'
import { HEADER_MAX_WIDTH } from '../header/Header'
import { MAIL_TO } from '../main/content/Contact'

export default function Footer() {
  const points =
    '5.8 6.06 21.52 6.06 21.52 9.98 17.58 9.98 17.59 13 21.52 13 21.52 21.75 5.8 21.75 5.8 18.5 13.67 18.5 13.67 15.5 5.8 15.5'
  return (
    <FooterWrapper>
      <div style={{ maxWidth: HEADER_MAX_WIDTH, margin: 'auto' }}>
        <FooterContent>
          <FooterIconWrapper>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.23 27.23'>
              <rect fill='#333333' width='27.23' height='27.23' rx='2'></rect>
              <polygon fill='#fff' points={points}></polygon>
            </svg>
          </FooterIconWrapper>
          <div style={{ overflow: 'hidden' }}>
            <FooterHeading>Contact Me</FooterHeading>
            <FooterLink href={MAIL_TO}>shmooritchie@gmail.com</FooterLink>
          </div>
        </FooterContent>
        <FooterIcons>
          <a href={MAIL_TO}>
            <FontAwesomeIcon icon={faAt} />
          </a>
          <a
            href='https://www.linkedin.com/in/shmoo-ritchie'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a
            href='https://www.github.com/shmootidy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </FooterIcons>
      </div>
      <ColouredBanner />
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 200px;
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1rem;
  margin: 2rem 7rem 1rem 4rem;

  @media (min-width: 500px) {
    margin: 4rem 2rem 1rem;
  }

  svg {
    margin: 0 1rem 1rem 0;
    overflow: unset;
    width: 50px;
  }
`

const FooterIconWrapper = styled.div`
  flex-grow: 1;
  padding: 16px;
  min-width: 100px;
`

const FooterLink = styled.a`
  margin: 0.5rem 0;
  color: rgba(0, 0, 0, 0.7);
  line-height: 2;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`

const FooterHeading = styled.div`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1.3px;
  margin: 0 0 1rem;
`

const FooterIcons = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: rgba(0, 0, 0, 0.5);
    margin: 2rem 1rem;
    font-size: 22px;

    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`
