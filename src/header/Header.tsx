import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import ShmooSearch from './ShmooSearch'
import { ColouredBanner } from '../SharedComponents/StyledComponents'
import useGetTestimonials from '../Hooks/useGetTestimonials'

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
      <TestimonialBanner>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Heart>❤</Heart>
          <MessyHair>Messy Hair • Tidy Code</MessyHair>
        </div>
        <div
          style={{
            fontWeight: 600,
            cursor: 'help',
          }}
          title='Some lovely things former colleagues, team leads and product managers have said to me over the years.'
        >
          {testimonials[testimonialIndex]}
        </div>
      </TestimonialBanner>
      <ShmooSearch />
    </header>
  )
}

const TestimonialBanner = styled.div`
  font-family: 'Poppins';
  display: flex;
  padding: 16px 2rem;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

const Heart = styled.span`
  font-size: 20px;
  padding-right: 16px;
  font-weight: 600;
`

const MessyHair = styled.span`
  margin-right: 2rem;
  font-weight: 100;
  letter-spacing: 0.21875;

  @media (max-width: 500px) {
    display: none;
  }
`
