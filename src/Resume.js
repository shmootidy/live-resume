// this is the top level component

import React, { Component } from 'react'

import Header from './Header'
import Content from './Content'
import Sidebar from './Sidebar'
import Footer from './Footer'

import './style/resume.css'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}    
