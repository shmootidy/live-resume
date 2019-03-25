import React from 'react'

const TechStack = (props) => {
  let key = 0;
  let techStack = Object.entries(props.techStack).map(tech => {
    key++
    return (
      <span className="project-tech" key={key}>
        <span className="tech-key tech">{tech[0]}</span>
        <span className="tech-value tech">{tech[1]}</span>
      </span>
    )
})
  return techStack
}

export default TechStack
