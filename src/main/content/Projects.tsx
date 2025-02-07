import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import useGetGithubRepos from '../../Hooks/useGetGithubRepos'
import { GreenText, H2 } from '../../SharedComponents/StyledComponents'
import LoadingSpinner from '../../SharedComponents/LoadingSpinner'
import LoadingDots from '../../SharedComponents/LoadingDots'

export default function Projects() {
  const { starredReadmes, starredRepos, isLoading, hasError } =
    useGetGithubRepos()

  const getGitHubRawUrl = (repoName: string, src: string) => {
    if (!src.startsWith('http')) {
      return `https://raw.githubusercontent.com/shmootidy/${repoName}/master/${src}`
    }
    return src
  }

  function getReadmeTextDisplay(readmeText: string, repoName: string) {
    console.log(repoName)
    // console.log(readmeText.split('\n'))
    const lines = readmeText.split('\n')
    return lines.slice(0, 5).join('\n')
    // return readmeText
  }

  return (
    <div>
      <H2>Projects</H2>
      {!isLoading ? <LoadingSpinner /> : null}
      {!isLoading ? <LoadingDots /> : null}
      {Object.keys(starredReadmes).map((repoName) => {
        return (
          <div key={repoName}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <img
                    src={getGitHubRawUrl(repoName, src || '')}
                    alt={alt || ''}
                    style={{ maxWidth: '100%' }}
                  />
                ),
              }}
            >
              {getReadmeTextDisplay(starredReadmes[repoName], repoName)}
            </ReactMarkdown>
          </div>
        )
      })}
      {/* {projects.map((project, i) => {
        const awardDot = project.award ? ' • ' : ''
        const award = project.award ? 'Award Winner!' : ''
        const image = project.img ? (
          <img
            style={{ maxWidth: '90%' }}
            src={require('../../assets/' + project.img)}
            alt={project.img}
          />
        ) : null
        const projectContents = (
          <div>
            <h3 style={{ margin: '0 8px' }}>
              <a href={project.url} target='_blank' rel='nooopener noreferrer'>
                {project.title.toUpperCase()}
              </a>
            </h3>
            <ProjectSubtitle>
              {project.subtitle}
              {awardDot}
              <GreenText>{award}</GreenText> • {project.dateCompleted}
            </ProjectSubtitle>
            <ImageTechBox>
              {image}
              <div style={{ margin: 0 }}>
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {Object.entries(project.techStack).map((tech, i) => {
                      return (
                        <ProjectTech key={i}>
                          <TechKey>{tech[0]}</TechKey>
                          <TechValue isOdd={i % 2 === 0}>{tech[1]}</TechValue>
                        </ProjectTech>
                      )
                    })}
                  </div>
                </div>
              </div>
            </ImageTechBox>
            {Object.entries(project.description).map((description, i) => {
              let key = description[0]
              return (
                <div key={i} style={{ margin: '0 0.5rem 0.5rem' }}>
                  <div
                    style={{
                      borderBottom: '1px solid rgba(0,0,0,0.2)',
                      fontWeight: 600,
                    }}
                  >
                    {key.replace(
                      key.substring(0, 1),
                      key.substring(0, 1).toUpperCase()
                    )}
                  </div>
                  <ul>
                    {description[1].map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )

        return (
          <div style={{ padding: '0.5rem 0', marginTop: 16 }} key={i}>
            {projectContents}
          </div>
        )
      })} */}
    </div>
  )
}

const ProjectSubtitle = styled.h4`
  font-family: 'Fira Mono';
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  margin: 0 0.5rem;
  font-weight: 400;
`

const ImageTechBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 8px;
`

const ProjectTech = styled.div`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  color: white;
  margin: 0.8rem 0.2rem 0.5rem 0rem;
`

const Tech = styled.span`
  padding: 2px 5px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
`

const TechKey = styled(Tech)`
  background: #5b5b5b;
  border-radius: 3px 0 0 3px;
`

const TechValue = styled(Tech)<{ isOdd: boolean }>`
  background: ${(props) => (props.isOdd ? '#E45637' : '#04C504')};
  border-radius: 0 3px 3px 0;
`
