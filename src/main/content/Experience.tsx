import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import useGetWorkExperience, { Job } from '../../Hooks/useGetWorkExperience'

const Experience = () => {
  const jobs = useGetWorkExperience()

  const [jobToDisplay, setJobToDisplay] = useState<Job | null>(null)
  const [linesOfCode, setLinesOfCode] = useState<number | null>(null)

  function handleClickEmployer(employer: string) {
    const job = jobs.find((job) => job.employer === employer)
    setJobToDisplay(job ?? null)
  }

  useEffect(() => {
    if (jobToDisplay) {
      // class open/close
      let lines = 2
      jobToDisplay.accomplishments.forEach((acc) => {
        // function open/close + comments open/close + line break + returnValue
        lines += 2 + 2 + 1 + 1
        lines += acc.steps.length
      })
      // import open/close + line break
      lines += 2 + 1
      lines += jobToDisplay.techStack.length
      setLinesOfCode(lines)
    }
  }, [jobToDisplay])

  return (
    <div id='experience'>
      <div className='experience-wrapper'>
        <div className='experience-head-item'>
          <button
            onClick={() => setJobToDisplay(null)}
            className='experience-button'
          >
            / work /
          </button>
          <div>{jobToDisplay ? jobToDisplay.employer.toLowerCase() : null}</div>
        </div>
        {jobToDisplay ? (
          <div className='experience-back-wrapper'>
            <button
              onClick={() => setJobToDisplay(null)}
              className='experience-button'
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: 8, paddingRight: 6 }}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span className='back'>Back</span>
            </button>
            <div>{jobToDisplay.duration.toLowerCase()}</div>
          </div>
        ) : null}
        {jobToDisplay && linesOfCode ? (
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            <pre className='experience-details-line-numbers'>
              <code style={{ display: 'flex', flexDirection: 'column' }}>
                {[...Array(linesOfCode).keys()].map((l) => {
                  return <div key={l}>{l + 1}</div>
                })}
              </code>
            </pre>
            <pre className='experience-details'>
              <code>
                <div>
                  <span className='pink'>{`import {`}</span>
                  {jobToDisplay.techStack.map((tech, i) => {
                    return (
                      <div style={{ marginLeft: 16 }} key={i}>{`${tech},`}</div>
                    )
                  })}
                  <div>
                    <span className='pink'>{`} from `}</span>
                    <span>'techStack'</span>
                  </div>
                </div>
                <br />
                <div>
                  <span className='pink'>class</span>
                  {` ${jobToDisplay.title.replace(/\s/g, '')} {`}
                </div>
                <div style={{ marginLeft: 16 }}>
                  {jobToDisplay.accomplishments.map((acc, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <span className='pink'>function</span>
                          <span className='purple'>{` ${acc.functionName}() {`}</span>
                        </div>
                        <div style={{ marginLeft: 16 }}>
                          {acc.steps.map((step, j) => {
                            return (
                              <div key={j}>
                                {j === 0 ? <div>{`/**`}</div> : null}
                                <div>{` * ${step}`}</div>
                                {j === acc.steps.length - 1 ? (
                                  <div>{`*/`}</div>
                                ) : null}
                              </div>
                            )
                          })}
                          <div>
                            <span className='pink'>return</span>
                            <span className='blue'>{` ${acc.returnValue}`}</span>
                          </div>
                        </div>
                        <div>{`}`}</div>
                        {i ===
                        jobToDisplay.accomplishments.length - 1 ? null : (
                          <br />
                        )}
                      </div>
                    )
                  })}
                </div>
                <div>{`}`}</div>
              </code>
            </pre>
          </div>
        ) : (
          <div>
            {jobs.map((job, i) => {
              return (
                <div key={i} className='experience-job-item'>
                  <div
                    style={{
                      display: 'flex',
                      width: '40%',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <FontAwesomeIcon icon={faFileLines} />
                    </div>
                    <button
                      className='experience-button'
                      onClick={() => handleClickEmployer(job.employer)}
                    >
                      {job.employer.toLowerCase()}
                    </button>
                  </div>
                  <div style={{ width: '40%' }}>{job.title.toLowerCase()}</div>
                  <div style={{ width: '20%', textAlign: 'right' }}>
                    {job.duration.toLowerCase()}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
