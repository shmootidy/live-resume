import React from 'react'

import './name-title-tabs.css'

const NameTitle = (props) => {
  return (
    <span className="flex flex-column responsive-padding sticky name-title ntt">
      <span id="name">susannah-ritchie</span>
      <span id="title">Full-stack <span className="green">Web</span> Developer • Vancouver, BC</span>
    </span>
  )
}

export default NameTitle
