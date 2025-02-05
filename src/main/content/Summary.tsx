import styled from '@emotion/styled'
import { H1, H2 } from '../../SharedComponents/StyledComponents'

import useGetTimeProgramming from '../../Hooks/useGetTimeProgramming'
import useGetSkills from '../../Hooks/useGetSkills'

export default function Summary() {
  const summarySkills = useGetSkills()

  const { years } = useGetTimeProgramming()

  return (
    <div>
      <div id='summary'>
        <H1>
          <CodeShmoo>shmoo</CodeShmoo>
        </H1>
        <p>
          Hi! I'm Shmoo. I'm an energetic, friendly software developer dedicated
          to building beautiful and performant digital products that users love
          to use, and clean, maintainable code that fellow developers love to
          build upon.
        </p>
        <p>I am passionate about:</p>
        <ul>
          <li>
            <strong>Debugging.</strong> Like a dog with a bone, I will track you
            down and I will squash you. And then, unlike a dog with a bone, I
            will write thorough tests and documentation to ensure the bug stays
            squashed.
          </li>
          <li>
            <strong>The quality of my code.</strong> I take great pride in what
            I produce. I care about the end user's experience as much as I care
            about developing, enforcing and following code conventions.
            Consistent practices make development easier, faster and frankly
            more enjoyable.
          </li>
          <li>
            <strong>Teamwork and collaboration.</strong> This one is important
            to me. I care about my teammates and believe that a strong sense of
            personal and professional support within a team goes a long way. A
            good team is a powerful force, but it doesn't happen by accident.
          </li>
        </ul>
        <p>
          {`With ${years}+ years in the industry and a background in education, musical
          performance, and customer service, I bring a unique set of skills to
          my role. Excellent communication skills, the ability to anticipate the
          needs of users, and a reflexive, creative approach to problem solving.`}
        </p>
        <p>I love building software. Let's do it together!</p>
      </div>
      <div>
        {summarySkills.map((s, i) => {
          return (
            <div key={i}>
              <H2>{s.title}</H2>
              <RedLinkList>
                {s.list.map((l, j) => {
                  return (
                    <RedLinkItem key={`${i}${j}`}>
                      {/* {l.link ? (
                        <a
                          href={l.link}
                          target='_blank'
                          rel='noreferrer'
                          title={
                            l.link.includes('npmjs.com')
                              ? "This will take you to a lookalike page. Don't be alarmed!"
                              : ''
                          }
                        >
                          {l.label}
                        </a>
                      ) : ( */}
                      {l.label}
                      {/* )} */}
                    </RedLinkItem>
                  )
                })}
              </RedLinkList>
            </div>
          )
        })}
      </div>
      <div>
        <H2>Usage</H2>
        <Usage>
          <code>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: 'rgb(215, 58, 73)' }}>import</span>
              {` { shmoosNumber, shmoosEmail } `}
              <span style={{ color: 'rgb(215, 58, 73)' }}>from</span>
              {` 'shmoos-live-resume'`}
            </div>
            <div>
              <span style={{ color: 'rgb(215, 58, 73)' }}>{`function `}</span>
              <span style={{ color: 'rgb(227, 98, 9)' }}>contactShmoo</span>
              <span>{`() {`}</span>
              <div
                style={{
                  margin: 16,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <a
                  href='mailto:shmooritchie@gmail.com?subject=I saw your resume!'
                  className='contact-shmoo-button'
                >
                  Click to email Shmoo
                </a>
                <a href='tel:+1-604-616-0247' className='contact-shmoo-button'>
                  Click to call Shmoo
                </a>
              </div>
              <div>{`}`}</div>
            </div>
          </code>
        </Usage>
      </div>
    </div>
  )
}

const RedLinkList = styled.ul`
  padding-left: 0;
  color: #cb3837;
  font-weight: 600;
  font-size: 20px;
`

const RedLinkItem = styled.li`
  display: inline-block;
  padding: 4px;
  margin-right: 4px;
`

const CodeShmoo = styled.code`
  font-family: 'Fira Mono';
  line-height: 1.15;
  border-radius: 3px;
  font-size: 36px;
  background: #f7f7f7;
  font-weight: 700;
  padding: 0 5px;
  color: #111111;
`

const Usage = styled.div`
  margin: 16px 0;
  font-size: 16px;
  background: #f7f7f7;
  border-radius: 2px;
  padding: 13px 15px;
`
