import { useState, useEffect } from 'react'
import useGetTestimonials from '../Hooks/useGetTestimonials'

export default function Random() {
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
    <div
      id='random'
      style={{
        fontFamily: 'Poppins',
        display: 'flex',
        padding: '16px 2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          id='heart'
          style={{
            fontSize: 20,
            paddingRight: 16,
            fontWeight: 600,
          }}
        >
          ❤
        </span>
        <span
          id='random-msg'
          style={{
            marginRight: '2rem',
            fontWeight: 100,
            letterSpacing: 0.21875,
          }}
        >
          Messy Hair • Tidy Code
        </span>
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
    </div>
  )
}
