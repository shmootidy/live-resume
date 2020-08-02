// contains Tab

import React, { useEffect } from 'react'
import Tab from './Tab'

import './tabs.scss'

const Tabs = (props) => {
  const tabsStickyPosition = {
    top: props.position + 'px'
  }
  useEffect(() => {
    const tabs = document.querySelector('.tabs') ? document.querySelector('.tabs') : null
    const mobileTabs = document.querySelector('.mobile-tabs')
    const observer = new IntersectionObserver(
      ([e]) => {
        mobileTabs.classList.toggle('at-top', e.intersectionRatio < 1)
      },
      {threshold: [0]}
    )
    if (tabs) observer.observe(tabs)
  })
  return (
    <div>
      <ul className="flex tabs">
        <Tab 
          tabs={props.tabs}
          tabToggle={props.tabToggle} 
          scrollToContent={props.scrollToContent} 
        />
      </ul>
    </div>
  )
}

export default Tabs
