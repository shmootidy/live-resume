import React from 'react'

const Tab = (props) => {
  const tab = props.tabs.map((tab, index) => {
    let selectedClass = tab.active ? '' : 'not-selected'
    let tabClass = 'tab tab' + (index + 1).toString()
    let fullClass =  tabClass + ' ' + selectedClass
    let tabText = tab.text
    return <li
        style={props.style}
        key={tab.text}
        className={fullClass + ' sticky'} 
        onClick={() => { props.tabToggle(index); props.scrollToContent(index) }}>
        {tabText}
      </li>
  })
  return tab
}

export default Tab
