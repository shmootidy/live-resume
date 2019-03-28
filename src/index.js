import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer';
// import Resume from './Resume'

import './index.css'

const Resume = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Resume />, document.getElementById('root'))
