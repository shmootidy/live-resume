import React from 'react'
import './style/projects.css'
import TechStack from './TechStack'

const Project = (props) => {
  let projects = props.projects.map(project => {
    let awardDot = project.award? ' • ' : ''
    let award = project.award ? 'Award Winner!' : ''
    let description = Object.entries(project.description)
    return (
    <div className="project" key={project.title}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h3 className="project-title">{project.title.toUpperCase()}</h3>
        <div className="project-subtitle">{project.subtitle}{awardDot}<span className="green">{award}</span> • {project.dateCompleted}</div>
        <img className="project-img" src={require('./assets/' + project.img)} alt={project.img} />
        <div className="project-description">{description[0]}</div>
        {/* <div className="project-description">{project.description.map(point => <div key={point}>{point}</div>)}</div> */}
        {/* <div className="project-description">This game lets users experience the <span className="highlight">cumulative effects of habits on mental health</span> indirectly, as a learning tool.</div> */}
        <div className="flex flex-wrap"><TechStack techStack={project.techStack} /></div>
      </a>
    </div>
    )
  })
  return projects
}

export default Project
