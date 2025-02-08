import { useState } from 'react'

import Content from './content/Content'
import Tabs from './content/Tabs'
import useGetTimeProgramming from '../Hooks/useGetTimeProgramming'
import useGetTabs from '../Hooks/useGetTabs'

export default function Main() {
  const tabs = useGetTabs()
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].value)
  const { years, months, days } = useGetTimeProgramming()

  return (
    <main style={{ paddingBottom: 64, flexGrow: 1 }}>
      <div
        style={{
          marginTop: 48,
          padding: '0 0.75rem',
          maxWidth: 1200,
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'Source Sans Pro',
              fontWeight: 600,
              fontSize: 24,
              margin: 0,
            }}
          >
            susannah ritchie (shmoo)
          </h2>
          <div
            style={{
              fontFamily: 'Fira Mono',
              fontSize: 14,
              opacity: 0.8,
              padding: '8px 0',
              marginBottom: 8,
            }}
          >
            <span
              title={`I've been a developing software for ${years} years, ${months} months and ${days} days. After careful consideration, I decided to leave teaching and start a new career path. In October 2018, I started prepping for bootcamp at Lighthouse Labs. I was instantly obsessed.`}
              style={{ cursor: 'help' }}
            >{`${years}.${months}.${days}`}</span>{' '}
            • <span style={{ color: '#14865c' }}>Software Dev</span> •
            Vancouver, BC
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }} id='main'>
          <Tabs selectedTab={selectedTab} onChangeTab={setSelectedTab} />
          <Content visibleTab={selectedTab} />
        </div>
      </div>
    </main>
  )
}
