import React from 'react'

const ProjectDescription = (props) => {
  let descriptions = props.descriptions.map(description => {
    let key = description[0]
    let value = description[1]
    let note = value.map(note => <li className="description-value">{note}</li>)
    return (
      <div className="description">
        <div className="description-key">{key.replace(key.substring(0,1), key.substring(0,1).toUpperCase())}</div>
        <ul>{note}</ul>
      </div>
    )
  })
  return descriptions
}

export default ProjectDescription