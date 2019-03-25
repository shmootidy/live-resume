import React from 'react'

const Project = (props) => {
  let projects = props.projects.map(project => {
    return <li className="project" key={project.title}>{project.title}</li>
  })
  return projects
}

export default Project
