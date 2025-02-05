// import useGetGithubRepos from '../../Hooks/useGetGithubRepos'
import useGetProjects from '../../Hooks/useGetProjects'
import './projects.scss'

export default function Projects() {
  // const { starredReadmes, starredRepos, isLoading, hasError } =
  //   useGetGithubRepos()

  // console.log(starredRepos, starredReadmes, isLoading, hasError)

  const projects = useGetProjects()

  return (
    <div id='projects'>
      <h2 className='content-title'>Projects</h2>
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
            <h3 className='project-title'>{project.title.toUpperCase()}</h3>
            <div className='project-subtitle'>
              {project.subtitle}
              {awardDot}
              <span className='green'>{award}</span> • {project.dateCompleted}
            </div>
            <div className='img-tech-box flex flex-column'>
              {image}
              <div className='project-tech'>
                <div id='tech-stack'>
                  <div className='flex flex-wrap'>
                    {/* <TechStack techStack={project.techStack} /> */}
                    {Object.entries(project.techStack).map((tech, i) => {
                      let techValueColor = i % 2 === 0 ? 'red' : 'green'
                      let techValueClass = 'tech tech-value-' + techValueColor

                      return (
                        <div className='project-tech' key={i}>
                          <span className='tech-key tech'>{tech[0]}</span>
                          <span className={techValueClass}>{tech[1]}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* <ProjectDescription descriptions={descriptions} /> */}
            {Object.entries(project.description).map((description, i) => {
              let key = description[0]
              let value = description[1]
              let note = value.map((note, i) => (
                <li key={i} className='description-value'>
                  {note}
                </li>
              ))
              return (
                <div className='description' key={i}>
                  <div className='description-key'>
                    {key.replace(
                      key.substring(0, 1),
                      key.substring(0, 1).toUpperCase()
                    )}
                  </div>
                  <ul>{note}</ul>
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
