import React, { useEffect } from 'react'
import Tab from './Tab'

import './tabs.scss'

const Tabs = (props) => {
  useEffect(() => {
    const tabs = document.querySelector('.tabs') ? document.querySelector('.tabs') : null
    const mobileTabs = document.querySelector('.tabs-top')
    const observer = new IntersectionObserver(
      ([e]) => {
        mobileTabs.classList.toggle('at-top', e.intersectionRatio < 1)
      },
      {
        threshold: [1],
        rootMargin: '0px 0px 100%'
      }
    )
    if (tabs) observer.observe(tabs)
  })
  const listClasses = props.tabTop ? 'tabs-top' : 'flex tabs'
  const moreClasses = props.largeScreenTabs ? listClasses + ' large-screen' : listClasses
  return (
    <div>
      <ul className={moreClasses}>
        <Tab 
          tabs={props.tabs}
          tabToggle={props.tabToggle} 
          displayContent={props.displayContent}
          tabTop={props.tabTop}
          setMainTab={props.setMainTab}
          mainTab={props.mainTab}
          largeScreenTab={props.largeScreenTabs}
        />
      </ul>
    </div>
  )
}

export default Tabs
