import React from 'react'

const Experience = (props) => {
  const jobs = [
    // { 
    //   title: 'Bartender',
    //   employer: 'The Emerald Lounge',
    //   duration: 'Mar\'18 – Dec\'18',
    //   accomplishments: ['Served cocktails with charm, accuracy, and speed.', '']
    // },
    {
      title: 'Web Developer & Designer',
      employer: 'Manacan Enterprises',
      duration: 'Apr\'19 – Mar\'20',
      accomplishments: ['Led site-wide restyling on various client ecommerce sites to improve UX/UI and conversion', 'Liaised with 3rd-party consultants to improve operations', 'Led initiative to increase sales and reduce customer service workload by improving content, flow, and management of customer-facing emails', 'Spearheaded development of product filtering system for existing inventory']
    },
    {
      title: 'Owner & Web Developer',
      employer: 'Lionheart Sleep School',
      duration: 'Jul\'16 – Nov\'18',
      accomplishments: ['Helped anxious new parents improve their baby\'s sleep.', 'Developed consistent branding across all platforms.', 'Organized community outreach events.']
    },
    {
      title: 'Teacher & Program Director',
      employer: 'Avenir School Society',
      duration: 'Feb\'14 – Jun\'15',
      accomplishments: ['Adapted curriculum to meet diverse student needs.', 'Managed school-wide programs, such as daily hot lunches, field trips, and meditation breaks.']
    },
    {
      title: 'Musician',
      employer: 'The Organ / Keep Tidy',
      duration: 'Nov\'04 – Sep\'12',
      accomplishments: ['Performed 100s of live shows in venues worldwide.', 'Wrote and recorded original music.']
    }
  ]

  const job = jobs.map(job => {
    return (
      <div key={ job.icon } className="experience">
        <div className="flex space-between job-underline">
          <div className="job-title">{job.title.toUpperCase()}</div>
          <div className="job-location">Van, BC</div>
        </div>
        <div className="flex space-between">
          <div className="job-employer">{job.employer}</div>
          <div className="job-duration">{job.duration}</div>
        </div>
        <div className="job-accomplishments description-value">{job.accomplishments.map(accomplishment => <div>{accomplishment}</div>)}</div>
      </div>
    )
  })

  return (
    <div id="experience">
      <h2 className="content-title">Employment</h2>
      <div>{job}</div>
    </div>
  )
}

export default Experience
