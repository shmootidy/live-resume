import React from 'react'

const Education = (props) => {
  const educationArr = [
    {
      school: 'Lighthouse Labs',
      awarded: 'Diploma of Web Development',
      year: '2019'
    },
    {
      school: 'UBC',
      awarded: 'Bachelor of Education',
      year: '2012'
    },
    {
      school: 'UBC',
      awarded: 'Bachelor of Arts',
      year: '2011'
    }
  ]

  let education = educationArr.map(education => {
    return (
      <div>
        <div className="awarded">{education.awarded.toUpperCase()}</div>
        <span className="flex space-between project-subtitle">
          <span className="school">{education.school}</span>
          <span className="year">{education.year}</span>
        </span>
      </div>
    )
  })

  return (
    <div id="education">
      <h2 className="content-title">Education</h2>
      <div>{education}</div>
    </div>
  )
}

export default Education
