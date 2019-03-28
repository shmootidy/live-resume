import React from 'react'
import TechStack from './TechStack'
import ProjectDescription from './ProjectDescription'

const Project = (props) => {
  let projects = props.projects.map(project => {
    let awardDot = project.award? ' • ' : ''
    let award = project.award ? 'Award Winner!' : ''
    let descriptions = Object.entries(project.description)

    return (
    <div className="project" key={project.title}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h3 className="project-title">{project.title.toUpperCase()}</h3>
        <div className="project-subtitle">{project.subtitle}{awardDot}<span className="green">{award}</span> • {project.dateCompleted}</div>
        <div className="img-tech-box flex flex-column">
          <img className="project-img" src={require('../../assets/' + project.img)} alt={project.img} />
          <div className="description description-value"><TechStack techStack={project.techStack} /></div>
        </div>
        <ProjectDescription descriptions={descriptions} />
      </a>
    </div>
    )
  })
  return projects
}

export default Project
