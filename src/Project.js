import React, { Component } from 'react'

const Project = (props) => {
  let projects = props.projects.map(project => {
    return <li className="project">{project.title}</li>
  })
  return projects
}

export default Project
