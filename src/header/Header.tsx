import styled from '@emotion/styled'

import Testimonials from './Testimonials'
import { ColouredBanner } from '../SharedComponents/StyledComponents'
import shmooSvg from '../assets/shmoo.svg'
import { MAIL_TO } from '../main/content/Contact'

export const HEADER_MAX_WIDTH = 1536

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 4px 13px -3px rgba(0 0, 0, .102)',
        borderBottom: '1px solid #d2d2d2',
      }}
    >
      <ColouredBanner />
      <div
        style={{
          maxWidth: HEADER_MAX_WIDTH,
          margin: 'auto',
          padding: '16px 32px',
        }}
      >
        <Testimonials />
      </div>
      <HeaderInnerWrapper>
        <HeaderContactBar>
          <img src={shmooSvg} alt='shmoo logo' width={110} />
          <HeaderContactButton href={MAIL_TO}>Contact Me</HeaderContactButton>
        </HeaderContactBar>
      </HeaderInnerWrapper>
    </header>
  )
}

const HeaderInnerWrapper = styled.div`
  border-top: 1px solid #d2d2d2;
`
const HeaderContactBar = styled.div`
  max-width: ${HEADER_MAX_WIDTH}px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins';
  font-weight: 600;

  img {
    margin: 16px 32px;
  }
`

const HeaderContactButton = styled.a`
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 13px 28px;
  opacity: 1;
  transition: opacity 0.15s ease-in;
  margin: 16px 32px;

  :hover {
    opacity: 0.8;
    color: #666;
  }
`
