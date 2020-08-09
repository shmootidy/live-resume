import React, { useEffect } from 'react'
import Tabs from './Tabs'

import './name-title-tabs.scss'

const NameTitle = (props) => {
  useEffect(() => {
    const nameTitleElm = document.querySelector('.name-title')
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1),
      {threshold: [1]}
    )
    observer.observe(nameTitleElm)
  })

  return (
    <span className="flex flex-column responsive-padding sticky name-title ntt">
      <span 
        className="flex flex-column"
        style={{background:'white', zIndex: 2}}>
        <span id="name">susannah ritchie (shmoo)</span>
        <span id="title">1.4.3 • <span className="green">Web Developer</span> • Van<span className="hide-for-tiny-screens">couver</span>, BC</span>
      </span>
      <Tabs 
        tabs={props.tabs}
        tabToggle={props.tabToggle}
        displayContent={props.displayContent}
        tabMobile={true}
        setMainTab={props.setMainTab}
      />
    </span>
  )
}

export default NameTitle
