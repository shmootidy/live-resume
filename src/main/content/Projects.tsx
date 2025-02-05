import styled from '@emotion/styled'
// import useGetGithubRepos from '../../Hooks/useGetGithubRepos'
import useGetProjects from '../../Hooks/useGetProjects'
import './projects.scss'
import { H2 } from '../../SharedComponents/StyledComponents'

export default function Projects() {
  // const { starredReadmes, starredRepos, isLoading, hasError } =
  //   useGetGithubRepos()

  // console.log(starredRepos, starredReadmes, isLoading, hasError)

  const projects = useGetProjects()

  return (
    <div>
      <H2>Projects</H2>
      {projects.map((project, i) => {
        const awardDot = project.award ? ' • ' : ''
        const award = project.award ? 'Award Winner!' : ''
        const image = project.img ? (
          <img
            className='project-img'
            src={require('../../assets/' + project.img)}
            alt={project.img}
          />
        ) : null
        const projectContents = (
          <div>
            <h3 style={{ margin: '0 8px' }}>{project.title.toUpperCase()}</h3>
            <ProjectSubtitle>
              {project.subtitle}
              {awardDot}
              <span className='green'>{award}</span> • {project.dateCompleted}
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
        const projectWithOuter = project.url ? (
          <a href={project.url} target='_blank' rel='nooopener noreferrer'>
            {projectContents}
          </a>
        ) : (
          <div>{projectContents}</div>
        )

        return (
          <div className='project' key={i}>
            {projectWithOuter}
          </div>
        )
      })}
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
