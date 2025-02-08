import styled from '@emotion/styled'
import { useState } from 'react'

import Content from './content/Content'
import Tabs from './content/Tabs'
import useGetTimeProgramming from '../Hooks/useGetTimeProgramming'
import useGetTabs from '../Hooks/useGetTabs'
import { GreenText } from '../SharedComponents/StyledComponents'

export default function Main() {
  const tabs = useGetTabs()
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].value)
  const { years, months, days } = useGetTimeProgramming()

  return (
    <main style={{ paddingBottom: 64, flexGrow: 1 }}>
      <MainWrapper>
        <div>
          <MainTitle>susannah ritchie (shmoo)</MainTitle>
          <MainSubtitle>
            {/* <span
              title={`I've been a developing software for ${years} years, ${months} months and ${days} days. After careful consideration, I decided to leave teaching and start a new career path. In October 2018, I started prepping for bootcamp at Lighthouse Labs. I was instantly obsessed.`}
              style={{ cursor: 'help' }}
            >{`${years}.${months}.${days}`}</span>{' '} */}
            <span>1.4.3</span> • <GreenText>Software Dev</GreenText> •
            Vancouver, BC
          </MainSubtitle>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }} id='main'>
          <Tabs selectedTab={selectedTab} onChangeTab={setSelectedTab} />
          <Content visibleTab={selectedTab} />
        </div>
      </MainWrapper>
    </main>
  )
}

const MainWrapper = styled.div`
  margin-top: 48px;
  padding: 0 0.75rem;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 0;
`
const MainSubtitle = styled.div`
  font-family: 'Fira Mono';
  font-size: 14px;
  opacity: 0.8;
  padding: 8px 0;
  margin-bottom: 8px;
`
