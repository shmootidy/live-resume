import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useGetTestimonials from '../Hooks/useGetTestimonials'

export default function Testimonials() {
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
    <TestimonialBanner>
      <span>
        <HeartHairWrapper>
          <Heart>❤</Heart>
          <MessyHair>Messy Hair • Tidy Code</MessyHair>
        </HeartHairWrapper>
      </span>
      <span
        style={{ cursor: 'help', textAlign: 'right' }}
        title='Some lovely things former colleagues, team leads and product managers have said to me over the years.'
      >
        <div
          style={{
            fontWeight: 600,
          }}
        >
          {testimonials[testimonialIndex].quote}
        </div>
        <div style={{ fontSize: 8 }}>
          {`- a former ${testimonials[testimonialIndex].speaker}`}
        </div>
      </span>
    </TestimonialBanner>
  )
}

const TestimonialBanner = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

const HeartHairWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
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
`
