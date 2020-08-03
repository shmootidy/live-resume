import React, { Component, useEffect } from 'react'

 const Tab = (props) => {
  useEffect(() => {
    const tabs = document.querySelectorAll('.tabs .tab')
    tabs.forEach(tab => {
      const observer = new IntersectionObserver(
        ([e]) => {
          console.log(e)
          e.target.classList.toggle('stuck')
        },
        {threshold: [0]}
      )
      observer.observe(tab)
    })
  })
  const tab = props.tabs.map((tab, index) => {
    let selectedClass = tab.active ? '' : 'not-selected'
    let tabClass = 'tab tab' + (index + 1).toString()
    let fullClass =  tabClass + ' ' + selectedClass
    let tabText = props.tabMobile ? tab.icon : tab.text
    return <li
        key={tab.text}
        className={fullClass} 
        onClick={() => { props.tabToggle(index); props.scrollToContent(index) }}>
        {tabText}
      </li>
  })
  return tab
}

export default Tab
