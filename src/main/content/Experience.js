import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed, faFileLines } from '@fortawesome/free-regular-svg-icons'

const Experience = (props) => {
  function camelCaseMe(input) {
    return input.replace(/\W+(.)/g, function(match, chr) {
      return chr.toUpperCase()
    })
  }
  function removeSpaces(input) {
    return input.replace(/\s/g, '')
  }
  const jobs = [
    {
      title: 'Intermediate Software Developer',
      employer: 'Clir Renewables',
      duration: 'Jun 21 – now',
      location: 'Vancouver, BC',
      techStack: ['TypeScript', 'Python', 'ReactJS', 'CSS', 'Liquibase', 'SQL', 'ReactQuery', 'AWS', 'Jest', 'Cypress'],
      accomplishments2: [
        {
          functionName: 'buildCustomFeatures',
          steps: [
            'UI design consultation',
            'work closely with Production Manager',
            'API development (AgGrid, QuillJS, Highcharts, ReactPdfRenderer)',
            'relational DB design (MariaDB)',
            'thorough unit & E2E testing (Jest, Cypress)',
            'meaningful code reviews'
          ],
          returnValue: 'customEndToEndFeature',
        },
        {
          functionName: 'squashBugs',
          steps: [
            'evaluate urgency',
            'explore root cause and estimate time it will take to remedy',
            'if quick to fix: fix it, write test to ensure it never happens again',
            'if needs time and is urgent: implement quicker fix; leave thorough documentation and create follow-up ticket',
            'discuss at next stand up',
          ],
          returnValue: 'betterCodeMoreTeamKnowledge',
        },
        {
          functionName: 'scrumLeader',
          steps: [
            'greet team: chit chat and settle in',
            'review PRs and ticket - ask questions, leave space for group discussion',
            'check in on what everyone is doing today',
            'ask for developments from Product Manager',
          ],
          returnValue: 'cohesiveTeamWithDirection',
        },
        {
          functionName: 'cssWizardOfTheTeam',
          steps: [
            'reliably translate designs into dynamic front end interfaces',
            'utilize and override 3rd-party APIs as needed',
            'mentor colleagues on solving complex style bugs',
          ],
          returnValue: 'beautifulInterfaces',
        },
        {
          functionName: 'leadSpikes',
          steps: [
            'evaluate scope of spiked challenge; discuss with PM and dev team for clarity as needed',
            'explore solutions on Stack Overflow, in API documentation and through trial-and-error',
            'write documentation with code samples, links, and screen recordings; outline possible solutions and (un)promising leads',
            'lead discussion with team to determine next steps',
          ],
          returnValue: 'streamlinedStrategiesAndEnhancedTeamKnowledge',
        },
      ],
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
      accomplishments2: [
        {
          functionName: 'uiAndBrandConsultant',
          steps: [
            'help client refine, define and focus their branding',
            'determine purpose of website (eg. increase sales, enhance web presence, showcase community talent)',
            'develop outlines and strategies to achieving client goals',
          ],
          returnValue: 'empoweredClient',
        },
        {
          functionName: 'buildCustomHooksAndStyles',
          steps: [
            'write custom Wordpress hook to meet client needs (eg. track sales, display floating add-to-cart button)',
            'adapt Wordpress themes for more cohesive branding',
          ],
          returnValue: 'goodSiteHappyClient',
        },
      ],
      accomplishments: [
        {
          point: 'Consulted on UI for various Wordpress e-commerce and community project sites.',
        },
        {
          point: 'Built custom styles and hooks to increase sales and improve branding.',
        },
      ]
    },
    {
      title: 'Junior Software Developer',
      employer: 'Manacan Enterprises',
      duration: 'Apr 19 – Mar 20',
      accomplishments2: [
        {
          functionName: 'restyleEcommerceSites',
          steps: [
            'draft designs and wireframes',
            'resolve cross-browser incompatibilities',
            'build new custom features (eg. navigation bars, category sidebars, footers, product pages, modals)',
            'improve UX of in-site promotions to optimize lead generation',
            'refactor legacy CSS into organized SASS files',
          ],
          returnValue: 'betterLookingBetterPerformingECommerceSites'
        },
        {
          functionName: 'improveInterteamOperations',
          steps: [
            'liaise with 3rd party consultants',
            'develop better workflows between web teams and other departments',
            'establish and analyze Google Analytics',
          ],
          returnValue: 'reduceFrustrationAndSaveTimeAndMoney',
        },
        {
          functionName: 'reviseCustomerFacingCopy',
          steps: [
            'identify problematic, misleading and tonally harsh customer facing copy',
            'write better copy',
            'mentor copywriters on best copywriting practices',
            'reduce customer frustration and confusion; reduce incoming calls',
          ],
          returnValue: 'happierCustomersHappierCustomerServiceTeam',
        },
        {
          functionName: 'categorizeExistingInventory',
          steps: [
            'conceptualize architecture of new categories',
            'create algorithm to programmatically assign products to categories by scraping descriptions for key words',
            'write documentation for merchandising staff to ensure proper category assignment on new products',
          ],
          returnValue: 'hundredsOfHoursOfLabourOutsourcedToAMachine',
        },
      ],
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
  ]
  const [jobToDisplay, setJobToDisplay] = useState(null)

  function handleClickEmployer(employer) {
    const job = jobs.find((job) => job.employer === employer)
    setJobToDisplay(job ?? null)
  }


  return (
    <div id="experience">
      <div style={{
        border: '1px solid #ececec',
        borderRadius: 4,
        marginTop: 10,
        fontSize: 16,
        color: '#343434',
      }}>
        <div
          style={{
            borderBottom: '1px solid #ececec',
            display: 'flex',
            fontWeight: 700
          }}>
          <button
            onClick={() => setJobToDisplay(null)}
            className="experience-button"
            style={{
              display: 'flex',
              margin: 16,
              marginRight: 0,
              lineHeight: 1.2,
            }}>/ work /</button>
            <div style={{
              margin: 16,
              marginLeft: 0,
              lineHeight: 1.2,
            }}>{jobToDisplay ? jobToDisplay.employer.toLowerCase() : null}</div>
        </div>
        {jobToDisplay ? (
          <pre
            style={{
              display: 'block',
              background: 'white',
              padding: '0.5em',
              color: 'rgb(51, 51, 51)',
              overflowX: 'auto',
              fontSize: 12,
            }}
          >
            <code>
              <div>
                <span style={{ color: 'rgb(167, 29, 93)' }}>class</span>
                {` ${removeSpaces(jobToDisplay.title)} {`}
              </div>
              <div style={{ marginLeft: 16 }}>
                {jobToDisplay.accomplishments2.map((acc, i) => {
                  return (
                    <div key={i} style={{ marginBottom: i === jobToDisplay.accomplishments2.length - 1 ? 0 : 16 }}>
                      <div>
                        <span style={{ color: 'rgb(167, 29, 93)' }}>function</span>
                        <span style={{ color: 'rgb(121, 93, 163)' }}>{` ${acc.functionName}() {`}</span>
                      </div>
                      <div style={{ marginLeft: 16 }}>
                        {acc.steps.map((step, j) => {
                            return (
                              <div key={j}>
                                {j === 0 ? <div>{`/**`}</div> : null}
                                <div>{` * ${step}`}</div>
                                {j === acc.steps.length - 1 ? <div>{`*/`}</div> : null}
                              </div>
                            )
                        })}
                        <div>
                          <span style={{ color: 'rgb(167, 29, 93)' }}>return</span>
                          <span style={{ color: 'rgb(0, 134, 179)' }}>{` ${acc.returnValue}`}</span>
                        </div>
                      </div>
                      <div>{`}`}</div>
                    </div>
                  )
                })}
              </div>
              <div>{`}`}</div>
            </code>
          </pre>
        ) : (
          <div>
            {jobs.map((job, i) => {
              return (
                <div key={i} style={{ display: 'flex', fontWeight: 700 }}>
                  <div>
                    <div style={{ paddingLeft: 8 }}><FontAwesomeIcon icon={faFolderClosed} /></div>
                    <button
                      className="experience-button"
                      onClick={() => handleClickEmployer(job.employer)}
                    >{job.employer.toLowerCase()}</button>
                  </div>
                  <div>{job.title.toLowerCase()}</div>
                  <div>{job.duration.toLowerCase()}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
  // return (
  //   <div id="experience">
  //     <div style={{
  //       border: '1px solid #ececec',
  //       borderRadius: 4,
  //       marginTop: 20,
  //       fontSize: 16,
  //       color: '#343434',
  //     }}>
  //       <div style={{ borderBottom: '1px solid #ececec', display: 'flex' }}>
  //         <button
  //           onClick={() => setDisplayJobDetails(null)}
  //           className="experience-button"
  //           style={{
  //             display: 'flex',
  //             margin: 16,
  //             marginRight: 0,
  //             fontWeight: 700,
  //             lineHeight: 1.2,
  //             fontSize: 16
  //           }}>/ work /</button>
  //         <div style={{
  //           display: 'flex',
  //           margin: 16,
  //           fontWeight: 700,
  //           lineHeight: 1.2,
  //           marginLeft: 0
  //         }}>{displayJobDetails ? displayJobDetails.toLowerCase() : null}</div>
  //       </div>
  //       {experienceToDisplay.map((job, i) => {
  //         return (
  //           <div key={i}>
  //             <div style={{
  //               borderBottom: '1px solid #ececec',
  //               padding: 3,
  //               height: 34,
  //               display: 'flex',
  //               fontSize: 14,
  //               alignItems: 'center',
  //               fontWeight: 700
  //             }}>
  //               <div style={{
  //                 display: 'flex',
  //                 width: '45%',
  //                 fontWeight: displayJobDetails ? 400 : 'bold'
  //               }}>
  //                 <div style={{ paddingLeft: 8 }}><FontAwesomeIcon icon={faFolderClosed} /></div>
  //                 <button onClick={() => handleClick(displayJobDetails ? null : job.employer)} className="experience-button">{`${displayJobDetails ? ".." : job.employer.toLowerCase()}/`}</button>
  //               </div>
  //               {displayJobDetails ? null : (
  //                 <>
  //                   <div style={{ width: '35%' }}>{job.title.toLowerCase()}</div>
  //                   <div style={{ textAlign: 'right', width: '20%', paddingRight: 12 }}>{job.duration}</div>
  //                 </>
  //               )}
  //             </div>
  //             {displayJobDetails === job.employer ? 
  //               job.accomplishments.map((acc, j) => (
  //                 <div key={j} style={{
  //                   borderBottom: '1px solid #ececec',
  //                   padding: 3,
  //                   height: 34,
  //                   display: 'flex',
  //                   fontSize: 14,
  //                   alignItems: 'center',
  //                   fontWeight: 400
  //                 }}>
  //                   <div style={{ paddingLeft: 8 }}><FontAwesomeIcon icon={faFileLines} /></div>
  //                   <button className="experience-button">{acc.point}</button>
  //                 </div>
  //               ))
  //               : null}
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
}

export default Experience
