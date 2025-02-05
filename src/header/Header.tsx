import ShmooSearch from './ShmooSearch'
import Testimonials from './Testimonials'
import { ColouredBanner } from '../SharedComponents/StyledComponents'

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 4px 13px -3px rgba(0 0, 0, .102)',
        borderBottom: '1px solid #d2d2d2',
      }}
    >
      <ColouredBanner />
      <Testimonials />
      <ShmooSearch />
    </header>
  )
}
