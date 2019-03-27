import React from 'react'

const ProjectDescription = (props) => {
  let descriptions = props.descriptions.map(description => {
    let key = description[0]
    let value = description[1]
    let note = value.map(note => <div className="description-value">{note}</div>)
    return (
      <div className="description">
        <div className="description-key">{key}</div>
        <span>{note}</span>
      </div>
    )
  })
  return descriptions
}

export default ProjectDescription