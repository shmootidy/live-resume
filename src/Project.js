import React from 'react'
import './style/projects.css'
import TechStack from './TechStack'

const Project = (props) => {
  let projects = props.projects.map(project => {
    let awardDot = project.award? ' • ' : ''
    let award = project.award ? 'Award Winner!' : ''
    return (
    <li className="project" key={project.title}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="project-title">{project.title.toUpperCase()}</div>
        <div className="project-subtitle">{project.description}{awardDot}<span className="green">{award}</span> • {project.dateCompleted}</div>
        <img className="project-img" src={require('./assets/' + project.img)} alt={project.img} />
        <div><TechStack techStack={project.techStack} /></div>
        <div className="project-contribution">My work included...{project.myContribution.map(point => <div key={point}>{point}</div>)}</div>
      </a>
    </li>
    )
  })
  return projects
}

export default Project
