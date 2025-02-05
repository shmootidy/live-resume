import { Component } from 'react'
import Random from './Random'
import ShmooSearch from './ShmooSearch'
import { ColouredBanner } from '../SharedComponents/StyledComponents'

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 4px 13px -3px rgba(0 0, 0, .102)',
          borderBottom: '1px solid #d2d2d2',
        }}
      >
        <ColouredBanner />
        <Random />
        <ShmooSearch />
      </header>
    )
  }
}
