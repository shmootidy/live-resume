import styled from '@emotion/styled'
import { H1, H2 } from '../../style/SharedComponents/SharedComponents'

import useGetTimeProgramming from './useGetTimeProgramming'

export default function Summary() {
  const frameworks = [
    {
      label: 'react',
      link: 'https://www.npmjs.com/package/react',
    },
    {
      label: 'remix',
      link: 'https://remix.run/',
    },
    {
      label: 'rails',
      link: 'https://rubyonrails.org/', // update this link to the recipe app once it's up
    },
  ]

  const libraries = [
    {
      label: 'marshmallow',
      link: '',
    },
    {
      label: 'react-query',
      link: '',
    },
    {
      label: 'highcharts',
      link: 'https://www.highcharts.com/demo/', // update to my demo when/if i get the license
    },
    {
      label: 'ag-grid',
      link: '',
    },
    {
      label: 'react-query',
      link: '',
    },
  ]

  const testingLibraries = [
    {
      label: 'pytest',
      link: '',
    },
    {
      label: 'cypress',
      link: '',
    },
    {
      label: 'react testing library',
      link: '',
    },
    {
      label: 'vitest',
      link: '',
    },
    {
      label: 'jest',
      link: '',
    },
  ]

  const languages = [
    {
      label: 'typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      label: 'python',
      link: 'https://www.python.org/',
    },
    {
      label: 'css',
      link: 'https://css-tricks.com/',
    },
    {
      label: 'javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      label: 'ruby',
      link: 'https://rubyapi.org/',
    },
    {
      label: 'sql',
      link: 'https://www.mysql.com/',
    },
    {
      label: 'yml',
      link: '',
    },
  ]

  const databaseManagementSystems = [
    {
      label: 'mysql',
      link: '',
    },
    {
      label: 'mariadb',
      link: '',
    },
    {
      label: 'liquibase',
      link: '',
    },
  ]

  const summarySkills = [
    {
      title: 'Languages',
      list: languages,
    },
    {
      title: 'Frameworks',
      list: frameworks,
    },
    {
      title: 'Libraries',
      list: libraries,
    },
    {
      title: 'Database Management Systems',
      list: databaseManagementSystems,
    },
    {
      title: 'Testing Libraries',
      list: testingLibraries,
    },
  ]

  const { years } = useGetTimeProgramming()

  return (
    <div>
      <div id='summary' style={{ marginTop: 16 }}>
        <H1>
          <code
            style={{
              fontSize: 36,
              background: 'rgb(247, 247, 247)',
              fontWeight: 700,
              padding: '0 5px',
              color: 'rgb(17, 17, 17)',
            }}
            className='highlight'
          >
            shmoo
          </code>
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
        <div
          style={{
            margin: '16px 0',
            fontSize: 16,
            background: 'rgb(247, 247, 247)',
            borderRadius: 2,
            padding: '13px 15px',
          }}
        >
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
        </div>
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
