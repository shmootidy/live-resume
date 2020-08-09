import React, { Component } from 'react'
import Content from './content/Content'
import Tabs from './name-title-tabs/Tabs'
import NameTitle from './name-title-tabs/NameTitle'

import './main.scss'
import './_responsive.scss'
import './sidebar/sidebar.scss'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // nameTitleHeight: '94',
      tabs: [
        { text: 'Readme',
          active: true,
          position: null
         },
        { text: 'Projects',
          active: false,
          position: null
        },
        { text: 'Work',
          active: false,
          position: null
        },{ 
          text: 'Education',
          active: false,
          position: null
        }
      ],
      visibleTab: 0,
    }
    this.tabToggle = this.tabToggle.bind(this)
    this.displayContent = this.displayContent.bind(this)
  }

  tabToggle(tabIndex) {
    let tabs = this.state.tabs
    tabs[tabIndex].active = true
    tabs.map((tab, index) => {
      if (index !== tabIndex) tab.active = false
      return null
    })
    this.setState( tabs )
  }

  displayContent(tabIndex) {
    this.setState( { visibleTab: tabIndex } )
  }

  componentDidMount() {
    setTimeout(this.setHeaderHeight, 100) // delay is necessary for accuracy
    window.addEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <main style={{minHeight: '100vh'}}>
        <NameTitle 
          tabs={this.state.tabs}
          tabToggle={this.tabToggle} 
          displayContent={this.displayContent} 
        />
        <div 
        className="flex flex-column" 
        id="main" 
        >
          <span 
            id="tabs" 
            className="ntt" 
          >
            <Tabs 
              tabs={this.state.tabs} 
              tabToggle={this.tabToggle} 
              displayContent={this.displayContent}
            />
          </span>
          <Content test={this.state.test} visibleTab={this.state.visibleTab} />
        </div>
      </main>
    )
  }
}    
