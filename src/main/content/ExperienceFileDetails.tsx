import styled from '@emotion/styled'
import {
  BlueText,
  PinkText,
  PurpleText,
} from '../../SharedComponents/StyledComponents'
import useGetWorkExperience from '../../Hooks/useGetWorkExperience'

interface IProps {
  selectedDir: string
  selectedFile: string
}

export default function ExperienceFileDetails(props: IProps) {
  const { selectedDir, selectedFile } = props

  const jobs = useGetWorkExperience()
  const jobToDisplay = jobs[0]

  let lines = 2
  jobToDisplay.accomplishments.forEach((acc) => {
    // function open/close + comments open/close + line break + returnValue
    lines += 2 + 2 + 1 + 1
    lines += acc.steps.length
  })
  // import open/close + line break
  lines += 2 + 1
  lines += jobToDisplay.techStack.length
  const linesOfCode = lines
  return (
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
              return <div style={{ marginLeft: 16 }} key={i}>{`${tech},`}</div>
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
                  {i === jobToDisplay.accomplishments.length - 1 ? null : (
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
  )
}

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
