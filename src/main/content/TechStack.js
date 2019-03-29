import React from 'react'

const TechStack = (props) => {
  let key = 0;
  let techStack = Object.entries(props.techStack).map(tech => {
    key++
    let techValueColor = key % 2 === 0 ? 'red' : 'green'
    let techValueClass = 'tech tech-value-' + techValueColor

    return (
      <span className="project-tech" key={key}>
        <span className="tech-key tech">{tech[0]}</span>
        <span className={techValueClass}>{tech[1]}</span>
      </span>
    )
  })
  return (
    <div id="techStack">
      <div className="sidebar-subtitle">languages &amp; frameworks</div>
      <div className="flex flex-wrap">{techStack}</div>
    </div>
  )
  // let techStack = props.techStack
  //   .join(' *|* ')
  //   .split('*')
  //   .map(tech => <span className="tech-stack">{tech}</span>)
  // return techStack
}

export default TechStack
