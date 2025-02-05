import styled from '@emotion/styled'

import { useGetEducation } from '../../Hooks/useGetEducation'
import { GreenText, H2 } from '../../SharedComponents/StyledComponents'

export default function Education() {
  const education = useGetEducation()

  return (
    <div id='education'>
      <H2>Education</H2>
      <div>
        {education.map((education, i) => {
          return (
            <div className='education' key={i}>
              <Awarded>{education.awarded.toUpperCase()}</Awarded>
              <span
                style={{
                  margin: 0,
                  fontFamily: 'Fira Mono',
                  fontSize: '0.875rem',
                  paddingBottom: '0.5rem',
                }}
                className='flex space-between'
              >
                <span className='school'>{education.school}</span>
                <span className='year'>{education.year}</span>
              </span>
              <div style={{ marginLeft: 16 }}>
                {education.skills.map((skill, j) => {
                  return <div key={j}>{skill}</div>
                })}
                {education.books ? (
                  <div style={{ marginLeft: 24 }}>
                    {education.books.map((book, j) => {
                      return (
                        <div key={j}>
                          <i>{book.title}</i>, {book.author}
                        </div>
                      )
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Awarded = styled(GreenText)`
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
`
