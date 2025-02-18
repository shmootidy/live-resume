import { createRoot } from 'react-dom/client'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './index.css'
// polyfills
import './polyfill'
import 'intersection-observer'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

const Resume = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Resume />)
