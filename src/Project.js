import React from 'react'
import './style/projects.css'

const Project = (props) => {
  let projects = props.projects.map(project => {
    return (
    <li className="project" key={project.title}>
      <a href={project.url}>
        <div className="project-title">{project.title.toUpperCase()}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-contribution">{project.myContribution.map(point => <div>{point}</div>)}</div>
        <div className="project-tech">{project.techStack.map(tech => <div>{tech}</div>)}</div>
        <div className="project-date">{project.dateCompleted}</div>
      </a>
    </li>
    )
  })
  return projects
}

export default Project
