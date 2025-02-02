import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";

import "./name-title-tabs.scss";

interface IProps {
  tabs: any;
  tabToggle: any;
  displayContent: any;
  setMainTab: any;
}

export default function NameTitle(props: IProps) {
  // const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   const nameTitleElm = document.querySelector('.name-title')
  //   const observer = new IntersectionObserver(
  //     ([e]) => {
  //       e.target.classList.toggle('is-sticky', e.intersectionRatio < 1)
  //       if (e.intersectionRatio < 1) {
  //         setIsSticky(true)
  //       } else {
  //         setIsSticky(false)
  //       }
  //     },
  //     {threshold: [1]}
  //   )
  //   observer.observe(nameTitleElm)
  // })

  return (
    <span className="flex flex-column responsive-padding sticky name-title ntt">
      <div className="flex flex-column name">
        <span id="name">susannah ritchie (shmoo)</span>
        <span id="title">
          1.4.3 • <span className="green">Web Developer</span> • Van
          <span className="hide-for-tiny-screens">couver</span>, BC
        </span>
      </div>
      {/* <Tabs 
        tabs={props.tabs}
        tabToggle={props.tabToggle}
        displayContent={props.displayContent}
        tabTop={true}
        setMainTab={props.setMainTab}
        nameTitleIsSticky={isSticky}
      /> */}
      {/* <Tabs
        tabs={props.tabs}
        tabToggle={props.tabToggle}
        displayContent={props.displayContent}
        tabTop={true}
        setMainTab={props.setMainTab}
        largeScreenTabs={true}
        nameTitleIsSticky={false}
      /> */}
    </span>
  );
}
