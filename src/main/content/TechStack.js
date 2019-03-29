import React from 'react'

const TechStack = (props) => {
  let key = 0;
  let techStack = Object.entries(props.techStack).map(tech => {
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
    <div id="tech-stack">
      <div className="flex flex-wrap">{techStack}</div>
    </div>
  )
}

export default TechStack

  // let techStack = props.techStack
  //   .join(' *|* ')
  //   .split('*')
  //   .map(tech => <span className="tech-stack">{tech}</span>)
  // return techStack