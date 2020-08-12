import React from 'react'

const ProjectDescription = (props) => {
  let descriptions = props.descriptions.map((description, i) => {
    let key = description[0]
    let value = description[1]
    let note = value.map((note, i) => <li key={i} className="description-value">{note}</li>)
    return (
      <div className="description" key={i}>
        <div className="description-key">{key.replace(key.substring(0,1), key.substring(0,1).toUpperCase())}</div>
        <ul>{note}</ul>
      </div>
    )
  })
  return descriptions
}

export default ProjectDescription