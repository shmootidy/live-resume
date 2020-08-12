import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faGraduationCap, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Tab = (props) => {
  const tabIcons = [faFileAlt, faTags, faCubes, faGraduationCap]
  const tab = props.tabs.map((tab, index) => {
    let selectedClass = tab.active ? '' : 'not-selected'
    let tabClass = 'tab tab' + (index + 1).toString()
    let fullClass =  tabClass + ' ' + selectedClass
    return <li
        key={tab.text}
        className={fullClass} 
        onClick={() => { props.tabToggle(index); props.displayContent(index, props.largeScreenTab); props.setMainTab(props.mainTab) }}>
        {<FontAwesomeIcon icon={tabIcons[index]} />}
        {tab.text}
      </li>
  })
  return tab
}

export default Tab
