import { useGetEducation } from '../../Hooks/useGetEducation'

export default function Education() {
  const education = useGetEducation()

  return (
    <div id='education'>
      <h2 className='content-title'>Education</h2>
      <div>
        {education.map((education, i) => {
          return (
            <div className='education' key={i}>
              <div className='awarded green'>
                {education.awarded.toUpperCase()}
              </div>
              <span
                style={{ margin: 0 }}
                className='flex space-between project-subtitle'
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
