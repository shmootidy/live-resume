import React from 'react'

const Experience = (props) => {
  const jobs = [
    {
      title: 'Intermediate Software Developer',
      employer: 'Clir Renewables',
      duration: 'Jun\'21 – now',
      location: 'Vancouver, BC',
      accomplishments: [
      {
        point: 'Build end-to-end custom features',
      },
      {
        point: 'Write and maintain documentation',
        subpoints: ['Outline processes and pitfalls of our stack', 'Write "how-tos" that are shared company wide (eg., "How to write a SQL Procedure combining Yaml & liquibase")']
      },{
        point: 'Design and build custom UI features',
        subpoints: ['Using libraries (AgGrid, Highcharts, ReactMapGL, MaterialUI, etc) and building from scratch', 'Scrolling, interactive carousels', 'Modals, sidepanels, and toasts']
      },{
        point: 'Work closely with Product Manager to achieve quartery goals',
        subpoints: ['Participate in grooming sessions', 'Provide context and pushback where necessary', 'Write spikes and other documents to inform the scope and direction of upcoming epics']
      },{
        point: 'UI expertise',
        subpoints: ['Work with lead designer to conduct and implement findings of UX research', 'Implement designs to perfection', 'Build zooming feature on a custom, interactive PDF-previewer']
      },{
        point: '"CSS Wizard" of the front-end team',
        subpoints: ['Mentor and debug tricky CSS issues', 'Restyle and refactor customized third-party libraries (AgGrid, Highcharts, MapBoxGL, etc)'],
      },{
        point: 'Scrum leader',
        subpoints: ['Lead morning standups', 'Collaborate on ticket and sprint grooming',],
      }, {
        point: 'Webserver and API development',
        subpoints: ['Build APIs in Python and TypeScript (React-Query)', 'Write integration tests'],
      }, {
        point: 'Develop, maintain and protect coding standards',
        subpoints: ['Review PRs', 'Mentor new hires', 'Collaborate to determine best practices']
      }, {
        point: 'Customize 3rd party libraries',
        subpoints: ['Extend classes',]
      }, {
        point: 'Write and maintain Unit, Component and E2E testing',
        subpoints: ['Cypress, Jest and React Testing Library', 'Fine tune testing strategies to be general enough to pass and specific enough to be useful'],
      }, {
        point: 'Lightning talks',
        subpoints: ['Contributed to overall team knowledge']
      }, {
        point: 'Conducted interviews',
        subpoints: [''],
      },{
        point: 'Team rapport',
        subpoints: ['Develop close friendships with my teammates, improving team cohesion and keeping up morale', 'Telling someone "nonsense" when impostor syndrome kicks in'],
      },{
        point: 'Improve and maintain packages and code infrastructure',
        subpoints: ['Slack integrations', 'Update critical packages without breaking the app', '']
      },{
        point: 'Other things',
        subpoints: ['Error handling, loading state, debugging', 'Modernize legacy front-end APIs and components']
      }, {
        point: 'Pairing and peer reviewing',
      },{
        point: 'Collaboration'
      },{
        point: 'Data Visualization'
      },{
        point: 'Epic champion'
      }]
    },
    {
      title: 'Developer & UX/UI Consultant',
      employer: 'Self-employed',
      duration: 'Sept\'20 – Jun\'21',
      location: 'Galiano Isl., BC',
      accomplishments: [{
        point: 'Creating custom plugins for clients\' e-commerce stores',
        subpoints: ['Building back-end portals on Wordpress for easy customization', 'Creating front-end components that seamlessly adapt various pre-established themes']
      }, {
        point: 'Transferring sites from one host to another',
        subpoints: ['Setting up SSL certificates', 'Resolving permission errors from transfer in SFTP']
      }, {
        point: 'Clear, prompt, friendly communication with clients',
        subpoints: ['Ensuring clients understand the work I\'ve done and how I\'ve done it, so clients remain in control of their site.']
      }, {
        point: 'Providing consultation, feedback and advice on UX/UI, copy, and other customer-facing features',
        subpoints: ['Serving as a "final eye" on many new features', 'Sketching wireframes for redesigns', 'Giving advice on email marketing, email capture, and brand-cohesion']
    }]
    },
    {
      title: 'Web Developer & Designer',
      employer: 'Manacan Enterprises',
      duration: 'Apr\'19 – Mar\'20',
      accomplishments: [{
        point: 'Led site-wide restyling on various client ecommerce sites to improve UX/UI and conversion:',
        subpoints: ['Wireframing and drafting designs', 'Resolving cross-browser compatibility issues', 'Building new custom features (navigation bars, category sidebars, footers, product pages, modals)', 'Optimizing lead generation', 'Refactoring legacy stylesheets following SMACSS architecture']
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
      employer: 'S. Ritchie Consulting',
      duration: 'Jul\'16 – Dec\'18',
      accomplishments: [{
        point: 'Researched and applied best-practices in e-marketing:',
        subpoints: ['Web design', 'Automated email streams', 'Content creation']
      },{
        point: 'Developed custom features to improve UX/UI with minimal overhead costs',
        subpoints: []
      },{
        point: 'Supported clients in achieving their goals through education, goal setting and accountability',
        subpoints: []
      }]
    },
    {
      title: 'Teacher & Program Manager',
      employer: 'Avenir School Society',
      duration: 'Feb\'14 – Jun\'15',
      accomplishments: [{
        point: 'Developed individualized education plans to improve learning outcomes of diverse students',
        subpoints: []
       },{
        point: 'Liaised with parents and faculty to increase support and intervention for struggling and at-risk students',
        subpoints: []
       },{
         point: 'Arranged field trips and school events to enrich students\' education',
         subpoints: []
       },{
         point: 'Ran the school\'s lunch department to ensure students had access to varied, nutritious food',
         subpoints: []
       }]
    },
    // {
    //   title: 'Musician',
    //   employer: 'The Organ / Keep Tidy',
    //   duration: 'Nov\'04 – Sep\'12',
    //   accomplishments: [{
    //     point: 'Performed 100s of live shows in venues worldwide:',
    //     subpoint: []
    //    },{
    //     point: 'Wrote and recorded original music:',
    //     subpoints: []
    //    }]
    // }
  ]

  const job = jobs.map(job => {
    return (
      <div key={ job.title } className="experience">
        <div className="flex space-between job-underline">
          <div className="job-title green">{job.title.toUpperCase()}</div>
          <div className="job-location">{job.location ? job.location : 'Van, BC'}</div>
        </div>
        <div className="job-subline flex space-between">
          <div className="job-employer">{job.employer}</div>
          <div className="job-duration">{job.duration}</div>
        </div>
        <ul className="job-accomplishments description-value">
          {job.accomplishments.map((accomplishment, i) => {
            return (
              <li key={i}>
                {accomplishment.point}
                <ul>
                  {accomplishment.subpoints ? accomplishment.subpoints.map((subpoint, i) => <li key={i}>{subpoint}</li>) : ''}
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
      <h2 className="content-title">Work History</h2>
      <div>{job}</div>
    </div>
  )
}

export default Experience
