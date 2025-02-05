import styled from '@emotion/styled'

import Testimonials from './Testimonials'
import { ColouredBanner } from '../SharedComponents/StyledComponents'

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
        <svg
          viewBox='0 0 1260 250'
          xmlns='http://www.w3.org/2000/svg'
          style={{ width: 110 }}
        >
          <path
            fill='#231F20'
            d='
                M0 50  h200 v50 h-50 v50 h50 v100 H0 v-50 h100 v-50 H0 z
                M240 0 h100 v50 h100 v200 h-50 v-150 h-50 v150 H240 z
                M480 50 v200 h100 V100 h50 v150 h50 V100 h50 v150 h50 V50 H480 z
                M820 50 v200 h200 V50 z M920 100 h50 v100 h-50 z
                M1060 50 v200 h200 V50 z M1170 100 h50 v100 h-50 z
                '
            strokeWidth='5'
            stroke='#f7f7f7'
          ></path>
        </svg>
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
  align-tems: center;
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
