import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useGetTestimonials from '../Hooks/useGetTestimonials'

import Testimonials from './Testimonials'
import { ColouredBanner } from '../SharedComponents/StyledComponents'
import shmooSvg from '../assets/shmoo.svg'

const HEADER_MAX_WIDTH = 1536

export default function Header() {
  const testimonials = useGetTestimonials()
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTestimonialIndex((prev) => {
        if (prev + 1 >= testimonials.length) {
          return 0
        }
        return prev + 1
      })
    }, 10000)

    return () => clearTimeout(timeout)
  })
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
          <HeaderContactButton href='mailto:shmooritchie@gmail.com?subject=I saw your resume!'>
            Contact Me
          </HeaderContactButton>
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
  padding: 16px 32px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins';
  font-weight: 600;
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
