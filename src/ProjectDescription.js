import React from 'react'

const ProjectDescription = (props) => {
  let descriptions = props.descriptions.map(description => {
    return (
      <div className="">
        <span className="">{description[0]}</span>
        <span className="">{description[1]}</span>
      </div>
    )
  })
  return descriptions
}

export default ProjectDescription