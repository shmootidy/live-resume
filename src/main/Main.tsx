import React, { Component, useState } from "react";
import Content from "./content/Content";
import Tabs from "./name-title-tabs/Tabs";
import NameTitle from "./name-title-tabs/NameTitle";

import "./main.scss";
import "./_responsive.scss";
import "./sidebar/sidebar.scss";

// interface Tab {
//   text: string;
//   active: boolean;
//   position: any;
// }
// const TABS: Tab[] = [
//   { text: "Readme", active: true, position: null },
//   {
//     text: "Work",
//     active: false,
//     position: null,
//   },
//   {
//     text: "Projects",
//     active: false,
//     position: null,
//   },
//   {
//     text: "Education",
//     active: false,
//     position: null,
//   },
// ];

export default function Main() {
  const [visibleTab, setVisibleTab] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  // const [visibleTab, setVisibleTab] = useState<Tab>(TABS[0]);

  function handleTabToggle(event: any) {
    console.log(event); // index of clicked tab
  }

  function handleDisplayContent(event: any) {
    console.log(event); // index of clicked tab
  }

  function handleSetMainTab(event: any) {
    console.log(event); // undefined
  }

  function handleChangeTab(event: any) {
    console.log(event);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <div
        style={{
          marginTop: 48,
          padding: "0 16px",
          maxWidth: 1200,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Source Sans Pro",
              fontWeight: 600,
              fontSize: 24,
              margin: 0,
            }}
          >
            susannah ritchie (shmoo)
          </h2>
          <div
            style={{
              fontFamily: "Fira Mono",
              fontSize: 14,
              opacity: 0.8,
              padding: "8px 0",
              marginBottom: 8,
            }}
          >
            1.4.3 • <span style={{ color: "#14865c" }}>Software Dev</span> •
            Vancouver, BC
          </div>
        </div>
        {/* <NameTitle
        tabs={TABS}
        tabToggle={handleTabToggle}
        displayContent={handleDisplayContent}
        setMainTab={handleSetMainTab}
      /> */}
        <div className="flex flex-column" id="main">
          <Tabs selectedTab={selectedTab} onChangeTab={setSelectedTab} />
          {/* <span id="tabs" className="ntt">
          <Tabs
            tabs={tabs}
            tabToggle={tabToggle}
            displayContent={displayContent}
            setMainTab={setMainTab}
            mainTab={true}
          />
        </span> */}
          <Content
            // largeScreenTab={largeScreenTab}
            visibleTab={selectedTab}
            // mainTab={mainTab}
          />
        </div>
      </div>
    </main>
  );
}
