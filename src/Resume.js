// this is the top level component

import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}    
