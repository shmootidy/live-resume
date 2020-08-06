import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faFolderOpen, faGraduationCap, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Tab = (props) => {
  const tabIcons = [faFileAlt, faTags, faCubes, faGraduationCap]
  const tab = props.tabs.map((tab, index) => {
    let selectedClass = tab.active ? '' : 'not-selected'
    let tabClass = 'tab tab' + (index + 1).toString()
    let fullClass =  tabClass + ' ' + selectedClass
    let tabIcon = <FontAwesomeIcon icon={tabIcons[index]} />
    let tabText = tab.text // props.tabMobile ? '' : tab.text
    return <li
        key={tab.text}
        className={fullClass} 
        onClick={() => { props.tabToggle(index); props.scrollToContent(index) }}>
        {tabIcon}
        {tabText}
      </li>
  })
  return tab
}

export default Tab
