import React, { useEffect } from 'react'
import Tab from './Tab'

import './tabs.scss'

const Tabs = (props) => {
  useEffect(() => {
    const tabs = document.querySelector('.tabs') ? document.querySelector('.tabs') : null
    const mobileTabs = document.querySelector('.mobile-tabs')
    
    const observer = new IntersectionObserver(
      ([e]) => {
        mobileTabs.classList.toggle('at-top', e.intersectionRatio < 1)
      },
      {threshold: [1]}
    )
    if (tabs) observer.observe(tabs)
  })
  const listClasses = props.tabMobile ? 'mobile-tabs' : 'flex tabs'
  return (
    <div>
      <ul className={listClasses}>
        <Tab 
          tabs={props.tabs}
          tabToggle={props.tabToggle} 
          displayContent={props.displayContent}
          tabMobile={props.tabMobile}
        />
      </ul>
    </div>
  )
}

export default Tabs
