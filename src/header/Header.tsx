import styled from '@emotion/styled'

import Testimonials from './Testimonials'
import { ColouredBanner } from '../SharedComponents/StyledComponents'
import shmooSvg from '../assets/shmoo.svg'

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
      <Testimonials />
      <HeaderContactBar>
        <img src={shmooSvg} alt='shmoo logo' width={110} />
        <HeaderContactButton href='mailto:shmooritchie@gmail.com?subject=I saw your resume!'>
          Contact Me
        </HeaderContactButton>
      </HeaderContactBar>
    </header>
  )
}

const HeaderContactBar = styled.div`
  display: flex;
  padding: 16px 32px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins';
  font-weight: 600;
  border-top: 1px solid #d2d2d2;
`

const HeaderContactButton = styled.a`
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 13px 28px;
  opacity: 1;
  transition: opacity 0.15s ease-in;

  :hover {
    opacity: 0.8;
    color: #666;
  }
`
