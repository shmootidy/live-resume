import { useState, useRef } from 'react'
import styled from '@emotion/styled'

import Summary from './Summary'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import Contact from '../sidebar/Contact'

import './content.scss'

interface IProps {
  visibleTab: any
}

export default function Content(props: IProps) {
  const { visibleTab } = props
  const myRef = useRef(null) // pretty sure i can kill this
  const [previousTab, setPreviousTab] = useState(props.visibleTab)
  const [hideContact, setHideContact] = useState(true)

  if (previousTab !== visibleTab) {
    setPreviousTab(visibleTab)
    setHideContact(true)
  }

  if (visibleTab === 0) {
    return (
      <ContentWrapper className='content-wrapper' ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className='content'>
          <Summary />
          {/* <Skills /> */}
        </div>
      </ContentWrapper>
    )
  } else if (visibleTab === 2) {
    return (
      <ContentWrapper className='content-wrapper' ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className='content'>
          <Projects />
        </div>
      </ContentWrapper>
    )
  } else if (visibleTab === 1) {
    return (
      <ContentWrapper className='content-wrapper' ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className='content'>
          <Experience />
        </div>
      </ContentWrapper>
    )
  } else if (visibleTab === 3) {
    return (
      <ContentWrapper className='content-wrapper' ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className='content'>
          <Education />
        </div>
      </ContentWrapper>
    )
  } else {
    return <div>This tab has no data.</div>
  }
}

const ContentWrapper = styled.div`
  margin-top: 16px;
`
