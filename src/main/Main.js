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
      mainTab: null
    }
    this.tabToggle = this.tabToggle.bind(this)
    this.displayContent = this.displayContent.bind(this)
    this.setMainTab = this.setMainTab.bind(this)
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

  setMainTab(bool) {
    this.setState({ mainTab: bool })
    console.log(this.state.mainTab)
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
          setMainTab={this.setMainTab}
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
              setMainTab={this.setMainTab}
              mainTab={true}
            />
          </span>
          <Content visibleTab={this.state.visibleTab} mainTab={this.state.mainTab} />
        </div>
      </main>
    )
  }
}    
