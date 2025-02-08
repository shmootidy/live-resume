import { useState } from 'react'
import styled from '@emotion/styled'

import Contact from '../sidebar/Contact'
import useGetTabs from '../../Hooks/useGetTabs'

interface IProps {
  visibleTab: string
}

export default function Content(props: IProps) {
  const { visibleTab } = props
  const [previousTab, setPreviousTab] = useState(props.visibleTab)
  const [isContactCollapsed, setIsContactCollapsed] = useState(true)
  const tabs = useGetTabs()

  // this collapses the small-screen contact field when switching tabs
  if (previousTab !== visibleTab) {
    setPreviousTab(visibleTab)
    setIsContactCollapsed(true)
  }

  const selectedTab = tabs.find((t) => t.value === visibleTab)?.component

  return (
    <ContentWrapper>
      <Contact
        isContactCollapsed={isContactCollapsed}
        onToggleCollapseContact={setIsContactCollapsed}
      />
      {selectedTab ? (
        <TabContents>{selectedTab}</TabContents>
      ) : (
        <div>This tab has no component.</div>
      )}
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
