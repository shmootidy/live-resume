import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer';
import './index.scss'
// polyfills
import './polyfill'
import 'intersection-observer'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

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
