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
      accomplishments: [{
        point: 'Led site-wide restyling on various client ecommerce sites to improve UX/UI and conversion:',
        subpoints: ['Wireframing and drafting designs', 'Resolving cross-browser compatibility issues', 'Building new custom features (navigation bars, category sidebars, footers, product pages, modals', 'Optimizing lead generation', 'Refactoring legacy stylesheets following SMACSS architecture']
      }, {
        point: 'Liaised with 3rd-party consultants to improve operations:',
        subpoints: ['Developing better systems and workflows between the web team and other departments', 'Establishing and analysing analytics']
      },{
        point: 'Led initiative to increase sales and reduce customer service workload by improving content, flow, and management of customer-facing emails:',
        subpoints: ['Trained marketing staff on setting up automated email streams', 'Audited emails for branding and tone consistency', 'Optimized email content to reduce file sizes']
      },{
        point: 'Spearheaded development of product filtering system for existing inventory:',
        subpoints: ['Conceptualizing the architecture of the new categories', 'Programmatically assigning existing products into new categories, saving merchandisers hours of tedious labour', 'Ensuring consistent application of new categories while onboarding merch staff']
      }]
    },
    {
      title: 'Owner & Web Developer',
      employer: 'Lionheart Sleep School',
      duration: 'Jul\'16 – Nov\'18',
      accomplishments: [{
        point: 'Helped anxious new parents improve their baby\'s sleep:',
        subpoints: []
      },{
        point: 'Developed consistent branding across all platforms:',
        subpoints: []
      },{
        point: 'Organized community outreach events:',
        subpoints: []
      }]
    },
    {
      title: 'Teacher & Program Director',
      employer: 'Avenir School Society',
      duration: 'Feb\'14 – Jun\'15',
      accomplishments: [{
        point: 'Adapted curriculum to meet diverse student needs:',
        subpoints: []
       },{
        point: 'Managed school-wide programs, such as daily hot lunches, field trips, and meditation breaks:',
        subpoints: []
       }]
    },
    {
      title: 'Musician',
      employer: 'The Organ / Keep Tidy',
      duration: 'Nov\'04 – Sep\'12',
      accomplishments: [{
        point: 'Performed 100s of live shows in venues worldwide:',
        subpoint: []
       },{
        point: 'Wrote and recorded original music:',
        subpoints: []
       }]
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
        <ul className="job-accomplishments description-value">
          {job.accomplishments.map(accomplishment => {
            return (
              <li>
                {accomplishment.point}
                <ul>
                  {accomplishment.subpoints ? accomplishment.subpoints.map(subpoint => <li>{subpoint}</li>) : ''}
                </ul>
              </li>
            )
          })}
        </ul>
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
