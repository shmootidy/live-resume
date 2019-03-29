import React, { Component } from 'react'
// import Job from './Job'

const Experience = (props) => {
  const jobs = [
    { 
      title: 'Bartender',
      employer: 'The Emerald Lounge',
      duration: 'Mar \'18 - Dec \'18',
      skills: 'Solid Team Player'
    },
    {
      title: 'Company Owner',
      employer: 'Lionheart Sleep School',
      duration: 'Jul \'16 - Nov \'18',
      skills: 'Brand Development'
    },
    {
      title: 'High School Teacher',
      employer: 'Avenir School Society',
      duration: 'Feb \'14 - Jun \'15',
      skills: 'Managing Long-Term, Complex Projects'
    },
    {
      title: 'Musician',
      employer: 'The Organ / Keep Tidy',
      duration: 'Nov \'04 - Sep \'12',
      skills: 'Live Performance'
    }
  ]

  const job = jobs.map(job => {
    return (
      <div>
        <div className="job-title description-key">{job.title.toUpperCase()}</div>
        <div className="flex space-between project-subtitle">
          <div className="job-employer">{job.employer}</div>
          <div className="job-duration">{job.duration}</div>
        </div>
        <div className="job-skill">{job.skills}</div>
      </div>
    )
  })

  return (
    <div id="experience">
      <h2 className="content-title">Experience</h2>
      <div>{job}</div>
    </div>
  )
}

export default Experience
