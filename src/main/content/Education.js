import React from 'react'

const Education = (props) => {
  const educationArr = [
    {
      school: 'Lighthouse Labs',
      awarded: 'Diploma of Web Development',
      year: '2019',
      skills: ['Led team of new developers in complex project with new tools under tight deadline', 'Awarded Best Final Project', 'Became adept at various programming languages', 'Learned web development fundamentals']
    },
    {
      school: 'UBC',
      awarded: 'Bachelor of Education',
      year: '2012',
      skills: ['Learned pedagogical models', 'Improved collaborative skills', 'Performed and facilitated hours of public speaking and group engagement']
    },
    {
      school: 'UBC',
      awarded: 'Bachelor of Arts',
      year: '2011',
      skills: ['Honed critical thinking and communication skills', 'Broadened my historical and cultural understanding', 'Developed disciplined, independent working schedule']
    }
  ]

  let education = educationArr.map((education, i) => {
    return (
      <div className="education" key={i}>
        <h3 style={{margin: '1rem 0 0'}} className="awarded">{education.awarded.toUpperCase()}</h3>
        <span style={{margin: 0}} className="flex space-between project-subtitle">
          <span className="school">{education.school}</span>
          <span className="year">{education.year}</span>
          </span>
        <ul>{education.skills.map((skill, j) => <li key={j}>{skill}</li> )}</ul>
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
