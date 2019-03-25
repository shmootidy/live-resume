import React from 'react'

const Tab = (props) => {
  const tab = props.tabs.map((tab, index) => {
    let selectedClass = tab.active ? '' : 'not-selected'
    let tabClass = 'tab' + (index + 1).toString()
    let fullClass =  tabClass + ' ' + selectedClass
    let tabText = tab.text
    return <li 
        key={tab.text}
        className={fullClass} 
        onClick={() => props.method(index)}>
        {tabText}
      </li>
  })
  return tab
}

export default Tab
