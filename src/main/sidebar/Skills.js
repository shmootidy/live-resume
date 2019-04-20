import React from 'react'

const Skills = (props) => {
  let skills = Object.entries(props.skills).map(skill => {
    let skillType = makeTitleCase(skill[0])
    let skillList = skill[1]
      .map(skillItem => <span className="skill-items">{skillItem}</span>)

    return (
      <div className="">
        <div className="skill-subtitle description-key">{skillType}</div>
        <div className="skills-list">{skillList}</div>
      </div>
    )
  })

  return (
    <div id="skills">
      <div className="sidebar-subtitle">skills (pls scroll down)</div>
      <div className="all-skills">{skills}</div>
    </div>
  )
}

export default Skills

// HELPER
  // adapted from https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function makeTitleCase(string) {
  let splitString = string.toLowerCase().split(' ')
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
  }
  return splitString.join(' ')
}