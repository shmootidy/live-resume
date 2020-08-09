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

  let education = educationArr.map((education, i) => {
    return (
      <div key={i}>
        <h3 style={{margin: '1rem 0 0'}} className="awarded">{education.awarded.toUpperCase()}</h3>
        <span style={{margin: 0}} className="flex space-between project-subtitle">
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
