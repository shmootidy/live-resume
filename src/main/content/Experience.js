import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed } from '@fortawesome/free-regular-svg-icons'

const Experience = (props) => {
  const jobs = [
    {
      title: 'Intermediate Software Developer',
      employer: 'Clir Renewables',
      duration: 'Jun 21 – now',
      location: 'Vancouver, BC',
      techStack: ['TypeScript', 'Python', 'ReactJS', 'CSS', 'Liquibase', 'SQL', 'ReactQuery', 'AWS', 'Jest', 'Cypress'],
      accomplishments: [
        {
          point: 'Building end-to-end custom features, including UI design consultation, API development, DB architecture, thorough unit & E2E testing, and code reviews.'
        },
        {
          point: 'Creatively forcing third-party libraries (AgGrid, QuillJS, Highcharts) to bend to my will.'
        },
        {
          point: 'Bug squasher extraordinaire, balancing speedy fixes with minimal side effects.',
        },
        {
          point: 'Serving as SCRUM master and taking a leadership role within our projects.',
        },
        {
          point: 'The "CSS Wizard" of our team.',
        },
      ],
    },
    {
      title: 'Web Developer & UI Consultant',
      employer: 'Self-employed',
      duration: 'Mar 20 – Jun 21',
      location: 'Galiano Isl., BC',
      accomplishments: [
        {
          point: 'Consulted on UI for various Wordpress e-commerce and community project sites.',
        },
        {
          point: 'Built custom styles and hooks to increase sales and improve branding.',
        },

        // {
        //   point: 'Creating custom plugins for clients\' e-commerce stores',
        //   subpoints: ['Building back-end portals on Wordpress for easy customization', 'Creating front-end components that seamlessly adapt various pre-established themes']
        // }, {
        //   point: 'Transferring sites from one host to another',
        //   subpoints: ['Setting up SSL certificates', 'Resolving permission errors from transfer in SFTP']
        // }, {
        //   point: 'Clear, prompt, friendly communication with clients',
        //   subpoints: ['Ensuring clients understand the work I\'ve done and how I\'ve done it, so clients remain in control of their site.']
        // }, {
        //   point: 'Providing consultation, feedback and advice on UX/UI, copy, and other customer-facing features',
        //   subpoints: ['Serving as a "final eye" on many new features', 'Sketching wireframes for redesigns', 'Giving advice on email marketing, email capture, and brand-cohesion']
        // }
      ]
    },
    {
      title: 'Junior Software Developer',
      employer: 'Manacan Enterprises',
      duration: 'Apr 19 – Mar 20',
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
    // {
    //   title: 'Owner & Web Developer',
    //   employer: 'S. Ritchie Consulting',
    //   duration: 'Jul 16 – Dec 18',
    //   accomplishments: [{
    //     point: 'Researched and applied best-practices in e-marketing:',
    //     subpoints: ['Web design', 'Automated email streams', 'Content creation']
    //   },{
    //     point: 'Developed custom features to improve UX/UI with minimal overhead costs',
    //     subpoints: []
    //   },{
    //     point: 'Supported clients in achieving their goals through education, goal setting and accountability',
    //     subpoints: []
    //   }]
    // },
    // {
    //   title: 'Teacher & Program Manager',
    //   employer: 'Avenir School Society',
    //   duration: 'Feb 14 – Jun 15',
    //   accomplishments: [{
    //     point: 'Developed individualized education plans to improve learning outcomes of diverse students',
    //     subpoints: []
    //    },{
    //     point: 'Liaised with parents and faculty to increase support and intervention for struggling and at-risk students',
    //     subpoints: []
    //    },{
    //      point: 'Arranged field trips and school events to enrich students\' education',
    //      subpoints: []
    //    },{
    //      point: 'Ran the school\'s lunch department to ensure students had access to varied, nutritious food',
    //      subpoints: []
    //    }]
    // },
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

  return (
    <div id="experience">
      {/* <h2 className="content-title">Work History</h2> */}
      <div style={{
        border: '1px solid #ececec',
        borderRadius: 4,
        marginTop: 20,
        fontSize: 16,
        color: '#343434',
      }}>
        <div style={{ borderBottom: '1px solid #ececec' }}>
          <div style={{ display: 'flex', margin: 16, fontWeight: 700, lineHeight: 1.2 }}>/ work /</div>
        </div>
        {jobs.map((job, i) => {
          return (
            <div style={{ borderBottom: '1px solid #ececec', padding: 3, height: 34, display: 'flex', fontSize: 14, alignItems: 'center', fontWeight: 700 }}>
              <div style={{ display: 'flex', width: '45%' }}>
                <div style={{ paddingLeft: 8 }}><FontAwesomeIcon icon={faFolderClosed} /></div>
                <div style={{ paddingLeft: 6 }}>{`${job.employer.toLowerCase()} /`}</div>
              </div>
              <div style={{ width: '35%' }}>{job.title.toLowerCase()}</div>
              <div style={{ textAlign: 'right', width: '20%', paddingRight: 12 }}>{job.duration}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
  // const job = jobs.map(job => {
  //   return (
  //     <div key={ job.title } className="experience">
  //       <div className="flex space-between job-underline">
  //         <div className="job-title green">{job.title.toUpperCase()}</div>
  //         <div className="job-location">{job.location ? job.location : 'Van, BC'}</div>
  //       </div>
  //       <div className="job-subline flex space-between">
  //         <div className="job-employer">{job.employer}</div>
  //         <div className="job-duration">{job.duration}</div>
  //       </div>
  //       {job.accomplishments.map((acc, i) => {
  //         return (
  //           <div key={i} style={{ margin: 16 }}>{acc.point}</div>
  //         )
  //       })}
  //       {/* <ul className="job-accomplishments description-value">
  //         {job.accomplishments.map((accomplishment, i) => {
  //           return (
  //             <li key={i}>
  //               {accomplishment.point}
  //               <ul>
  //                 {accomplishment.subpoints ? accomplishment.subpoints.map((subpoint, i) => <li key={i}>{subpoint}</li>) : ''}
  //               </ul>
  //             </li>
  //           )
  //         })}
  //       </ul> */}
  //     </div>
  //   )
  // })

  // return (
  //   <div id="experience">
  //     <h2 className="content-title">Work History</h2>
  //     <div>{job}</div>
  //   </div>
  // )
}

export default Experience
