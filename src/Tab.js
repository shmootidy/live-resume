import React, { Component } from 'react'

const Tab = (props) => {
  const tab = props.content.map((tab, index) => {
    let selectedClass = tab.active ? '' : 'not-selected'
    let tabClass = 'tab' + (index + 1).toString()
    let fullClass =  tabClass + ' ' + selectedClass
    let tabText = tab.text
    return <li className={fullClass} onClick={() => props.method(index)}>{tabText}</li>
  })
  return tab
}

export default Tab