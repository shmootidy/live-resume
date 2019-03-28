import React, { Component } from 'react'

const Skills = (props) => {
  let key = 0;
  let skills = Object.entries(props.skills).map(tech => {
    key++
    let techValueColor = key % 2 === 0 ? 'red' : 'green'
    let techValueClass = 'tech tech-value-' + techValueColor
    return (
      <div className="project-tech" key={key}>
        <span className="tech-key tech">{tech[0]}</span>
        <span className={techValueClass}>{tech[1]}</span>
      </div>
    )
  })

  return (
    <div id="skills">
      <div className="sidebar-subtitle">languages &amp; frameworks</div>
      <div className="">{skills}</div>
    </div>
  )
}

export default Skills
