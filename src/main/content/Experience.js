import React from 'react'

const Experience = (props) => {
  const jobs = [
    // { 
    //   title: 'Bartender',
    //   employer: 'The Emerald Lounge',
    //   duration: 'Mar \'18 - Dec \'18',
    //   skills: ['Served cocktails with charm, accuracy, and speed.', '']
    // },
    {
      title: 'Company Owner',
      employer: 'Lionheart Sleep School',
      duration: 'Jul \'16 - Nov \'18',
      skills: ['Helped anxious new parents improve their baby\'s sleep.', 'Developed consistent branding across all platforms.', 'Organized community outreach events.']
    },
    {
      title: 'High School Teacher',
      employer: 'Avenir School Society',
      duration: 'Feb \'14 - Jun \'15',
      skills: ['Adapted curriculum to meet diverse student needs.', 'Managed school-wide programs, such as daily hot lunches, field trips, and meditation breaks.']
    },
    {
      title: 'Musician',
      employer: 'The Organ / Keep Tidy',
      duration: 'Nov \'04 - Sep \'12',
      skills: ['Performed 100s of live shows in venues worldwide.', 'Wrote and recorded original music.']
    }
  ]

  const job = jobs.map(job => {
    return (
      <div className="experience">
        <div className="job-title description-key">{job.title.toUpperCase()}</div>
        <div className="flex space-between project-subtitle">
          <div className="job-employer">{job.employer}</div>
          <div className="job-duration">{job.duration}</div>
        </div>
        <div className="job-skill description-value">{job.skills.map(skill => <div>{skill}</div>)}</div>
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
