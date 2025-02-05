import { useState } from 'react'
import styled from '@emotion/styled'

import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Contact from '../sidebar/Contact'

import './content.scss'

interface IProps {
  visibleTab: number
}

export default function Content(props: IProps) {
  const { visibleTab } = props
  const [previousTab, setPreviousTab] = useState(props.visibleTab)
  const [isContactCollapsed, setIsContactCollapsed] = useState(true)

  // this collapses the small-screen contact field when switching tabs
  if (previousTab !== visibleTab) {
    setPreviousTab(visibleTab)
    setIsContactCollapsed(true)
  }

  function getVisibleTabContents() {
    if (visibleTab === 0) {
      return <Summary />
    } else if (visibleTab === 2) {
      return <Projects />
    } else if (visibleTab === 1) {
      return <Experience />
    } else if (visibleTab === 3) {
      return <Education />
    } else {
      return <div>This tab has no data.</div>
    }
  }

  return (
    <ContentWrapper>
      <Contact
        isContactCollapsed={isContactCollapsed}
        onToggleCollapseContact={setIsContactCollapsed}
      />
      <TabContents>{getVisibleTabContents()}</TabContents>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  margin-top: 16px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.65;
  letter-spacing: 0.1px;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`
const TabContents = styled.div`
  @media (min-width: 960px) {
    width: 66%;
    margin-right: 3rem;
  }
`
