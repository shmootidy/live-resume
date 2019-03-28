import React from 'react'

const TechStack = (props) => {
  let techStack = props.techStack
    .join(' *|* ')
    .split('*')
    .map(tech => <span className="tech-stack">{tech}</span>)
  return techStack
}

export default TechStack
