import React from 'react'

import './name-title-tabs.scss'

const NameTitle = (props) => {
  return (
    <span className="flex flex-column responsive-padding sticky name-title ntt">
      <span id="name">susannah ritchie (shmoo)</span>
      <span id="title">1.4.3 • <span className="green">Web Developer</span> • Vancouver, BC</span>
    </span>
  )
}

export default NameTitle
