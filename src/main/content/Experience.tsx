import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import useGetWorkExperience, { Job } from '../../Hooks/useGetWorkExperience'
import {
  BlueText,
  PinkText,
  PurpleText,
} from '../../SharedComponents/StyledComponents'

export default function Experience() {
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
      <ExperienceWrapper>
        <ExperienceHeadItem>
          <ExperienceButton onClick={() => setJobToDisplay(null)}>
            / work /
          </ExperienceButton>
          <div>{jobToDisplay ? jobToDisplay.employer.toLowerCase() : null}</div>
        </ExperienceHeadItem>
        {jobToDisplay ? (
          <ExperienceBackWrapper>
            <ExperienceButton
              onClick={() => setJobToDisplay(null)}
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
              {/* this one is ok */}
              <span className='back'>Back</span>
            </ExperienceButton>
            <div>{jobToDisplay.duration.toLowerCase()}</div>
          </ExperienceBackWrapper>
        ) : null}
        {jobToDisplay && linesOfCode ? (
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            <ExperienceDetailsLineNumbers>
              <code style={{ display: 'flex', flexDirection: 'column' }}>
                {[...Array(linesOfCode).keys()].map((l) => {
                  return <div key={l}>{l + 1}</div>
                })}
              </code>
            </ExperienceDetailsLineNumbers>
            <ExperienceDetails>
              <code>
                <div>
                  <PinkText>{`import {`}</PinkText>
                  {jobToDisplay.techStack.map((tech, i) => {
                    return (
                      <div style={{ marginLeft: 16 }} key={i}>{`${tech},`}</div>
                    )
                  })}
                  <div>
                    <PinkText>{`} from `}</PinkText>
                    <span>'techStack'</span>
                  </div>
                </div>
                <br />
                <div>
                  <PinkText>class</PinkText>
                  {` ${jobToDisplay.title.replace(/\s/g, '')} {`}
                </div>
                <div style={{ marginLeft: 16 }}>
                  {jobToDisplay.accomplishments.map((acc, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <PinkText>function</PinkText>
                          <PurpleText>{` ${acc.functionName}() {`}</PurpleText>
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
                            <PinkText>return</PinkText>
                            <BlueText>{` ${acc.returnValue}`}</BlueText>
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
            </ExperienceDetails>
          </div>
        ) : (
          <div>
            {jobs.map((job, i) => {
              return (
                <ExperienceJobItem key={i}>
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
                    <ExperienceButton
                      onClick={() => handleClickEmployer(job.employer)}
                    >
                      {job.employer.toLowerCase()}
                    </ExperienceButton>
                  </div>
                  <div style={{ width: '40%' }}>{job.title.toLowerCase()}</div>
                  <div style={{ width: '20%', textAlign: 'right' }}>
                    {job.duration.toLowerCase()}
                  </div>
                </ExperienceJobItem>
              )
            })}
          </div>
        )}
      </ExperienceWrapper>
    </div>
  )
}

const ExperienceJobItem = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
  padding: 0 8px;
  height: 34px;
  align-items: center;
  font-size: 14px;
  line-height: 1;
`
const ExperienceButton = styled.button`
  padding-left: 6px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
  text-align: left;
  &:hover {
    text-decoration: underline;
    .back {
      text-decoration: underline;
    }
  }
`
const ExperienceWrapper = styled.div`
  border: 1px solid #ececec;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
  color: #343434;
`
const ExperienceHeadItem = styled.div`
  border-bottom: 1px solid #ececec;
  display: flex;
  font-weight: 700;
  line-height: 1.2;

  button {
    display: flex;
    margin: 16px 0 16px 16px;
    line-height: inherit;
  }
  div {
    margin: 16px 16px 16px 0;
    line-height: inherit;
  }
`
const ExperienceBackWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
  background: #fafafa;
  font-size: 12px;
  justify-content: space-between;
  padding: 5px 10px;
`

const ExperienceDetailsLineNumbers = styled.pre`
  display: block;
  padding: 0.5em;
  font-size: 12px;
  min-width: 16px;
  color: rgb(140, 140, 140);
`
const ExperienceDetails = styled.pre`
  display: block;
  padding: 0.5em;
  color: rgb(51, 51, 51);
  font-size: 12px;
`
