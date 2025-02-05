// contains Random

import { Component } from 'react'
import Random from './Random'
import ShmooSearch from './ShmooSearch'

export default class Header extends Component {
  render() {
    return (
      <header
        id='header'
        // just to keep things straight while i convert
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 4px 13px -3px rgba(0 0, 0, .102)',
          borderBottom: '1px solid #d2d2d2',
        }}
      >
        <div
          style={{
            borderImage:
              'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
            borderStyle: 'solid',
            borderWidth: '10px 0 0',
          }}
        />
        <Random />
        <ShmooSearch />
      </header>
    )
  }
}
