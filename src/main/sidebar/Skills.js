import React, { Component } from 'react'

const Skills = (props) => {
  let skills = Object.entries(props.skills).map(skill => {
    return (
      <div>
        <div>{skill[0]}</div>
        <div>
          {skill[1].map(skillDetail => <div>{skillDetail}</div>)}
        </div>
      </div>
    )
  })

  return (
    <div id="skills">
      <div className="sidebar-subtitle">skills</div>
      <div className="">{skills}</div>
    </div>
  )
}

export default Skills
