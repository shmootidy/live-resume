import React, { useState, useRef } from "react";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
// import Skills from '../sidebar/Skills'
import Contact from "../sidebar/Contact";

import "./content.scss";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 170)

interface IProps {
  visibleTab: any;
  // mainTab: any;
}

export default function Content(props: IProps) {
  const { visibleTab } = props;
  console.log(visibleTab);
  const myRef = useRef(null); // pretty sure i can kill this
  // const executeScroll = () => scrollToRef(myRef)
  const [previousTab, setPreviousTab] = useState(props.visibleTab);
  const [hideContact, setHideContact] = useState(true);

  if (previousTab !== visibleTab) {
    setPreviousTab(visibleTab);
    setHideContact(true);
    // if (props.mainTab) {
    //   // setHideContact(true)
    // } else {
    //   // if (!props.largeScreenTab) executeScroll()
    // }
  }

  if (visibleTab === 0) {
    return (
      <div className="content-wrapper" ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className="content">
          <Summary />
          {/* <Skills /> */}
        </div>
      </div>
    );
  } else if (visibleTab === 2) {
    return (
      <div className="content-wrapper" ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className="content">
          <Projects />
        </div>
      </div>
    );
  } else if (visibleTab === 1) {
    return (
      <div className="content-wrapper" ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className="content">
          <Experience />
        </div>
      </div>
    );
  } else if (visibleTab === 3) {
    return (
      <div className="content-wrapper" ref={myRef}>
        <Contact hideContact={hideContact} toggleHideContact={setHideContact} />
        <div className="content">
          <Education />
        </div>
      </div>
    );
  } else {
    return <div>Whoops! Something went wrong in Content.js</div>;
  }
}
