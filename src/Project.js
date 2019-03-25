import React from 'react'
import './style/projects.css'

const Project = (props) => {
  let projects = props.projects.map(project => {
    return (
    <li className="project" key={project.title}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="project-title">{project.title.toUpperCase()}</div>
        <img className="project-img" src={require('./assets/' + project.img)} />
        <div className="project-subtitle">{project.description} • {project.dateCompleted}</div>
        <div className="flex space-between">
          <div className="project-contribution">{project.myContribution.map(point => <div>{point}</div>)}</div>
          <div className="project-tech">{project.techStack.map(tech => <div>{tech}</div>)}</div>
        </div>
      </a>
    </li>
    )
  })
  return projects
}

export default Project
