import styled from '@emotion/styled'

import { useGetEducation } from '../../Hooks/useGetEducation'
import { GreenText, H2 } from '../../SharedComponents/StyledComponents'

export default function Education() {
  const education = useGetEducation()

  return (
    <div>
      <H2>Education</H2>
      <div>
        {education.map((education, i) => {
          return (
            <div
              key={i}
              style={{
                marginTop: 16,
                paddingTop: 8,
                fontSize: 16,
              }}
            >
              <Awarded>{education.awarded.toUpperCase()}</Awarded>
              <SchoolAndYear>
                <strong>{education.school}</strong>
                <span>{education.year}</span>
              </SchoolAndYear>
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
  display: block;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
`
const SchoolAndYear = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px;
  font-family: 'Fira Mono';
  font-size: 14px;
  padding-botom: 8px;
`
