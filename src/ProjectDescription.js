import React from 'react'

const ProjectDescription = (props) => {
  let descriptions = props.descriptions.map(description => {
    let key = description[0]
    let value = description[1]
    if (typeof value === 'object' && value.length) {
      value = value.map(note => <div className="">{note}</div>)
    }
    return (
      <div className="description">
        <span className="description-key">{key} • </span>
        <span className="description-value">{value}</span>
      </div>
    )
  })
  return descriptions
}

export default ProjectDescription