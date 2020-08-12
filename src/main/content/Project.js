import React from 'react'
import TechStack from './TechStack'
import ProjectDescription from './ProjectDescription'

const Project = (props) => {
  const projects = props.projects.map((project, i) => {
    const awardDot = project.award? ' • ' : ''
    const award = project.award ? 'Award Winner!' : ''
    const descriptions = Object.entries(project.description)
    const image = project.img ? <img className="project-img" src={require('../../assets/' + project.img)} alt={project.img} /> : null
    const projectContents = (
      <div>
        <h3 className="project-title">{project.title.toUpperCase()}</h3>
        <div className="project-subtitle">{project.subtitle}{awardDot}<span className="green">{award}</span> • {project.dateCompleted}</div>
        <div className="img-tech-box flex flex-column">
          {image}
          <div className="project-tech"><TechStack techStack={project.techStack} /></div>
        </div>
        <ProjectDescription descriptions={descriptions} />
      </div>
    )
    const projectWithOuter = project.url ? (
      <a href={project.url} target="_blank" rel="nooopener noreferrer">
        {projectContents}
      </a>
    ) : (
      <div>{projectContents}</div>
    )

    return <div className="project" key={i}>{projectWithOuter}</div>
  })
  return projects
}

export default Project
