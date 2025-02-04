import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import Content from './content/Content'
import Tabs from './name-title-tabs/Tabs'

import './main.scss'
import './_responsive.scss'
import './sidebar/sidebar.scss'
import useGetTimeProgramming from './content/useGetTimeProgramming'

export default function Main() {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { years, months, days } = useGetTimeProgramming()

  return (
    <main style={{ minHeight: '100vh' }}>
      <div
        style={{
          marginTop: 48,
          padding: '0 16px',
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
              title={`I've been a developing software for ${years} years, ${months} months and ${days} days. After long, careful consideration, I decided to leave teaching and start a new career path. In October 2018, I started prepping for bootcamp at Lighthouse Labs. I was instantly obsessed.`}
              style={{ cursor: 'pointer' }}
            >{`${years}.${months}.${days}`}</span>{' '}
            • <span style={{ color: '#14865c' }}>Software Dev</span> •
            Vancouver, BC
          </div>
        </div>
        <div className='flex flex-column' id='main'>
          <Tabs selectedTab={selectedTab} onChangeTab={setSelectedTab} />
          <Content visibleTab={selectedTab} />
        </div>
      </div>
    </main>
  )
}
