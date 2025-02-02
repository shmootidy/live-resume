import React, { Component, useState } from "react";
import Content from "./content/Content";
import Tabs from "./name-title-tabs/Tabs";
import NameTitle from "./name-title-tabs/NameTitle";

import "./main.scss";
import "./_responsive.scss";
import "./sidebar/sidebar.scss";

interface Tab {
  text: string;
  active: boolean;
  position: any;
}
const TABS: Tab[] = [
  { text: "Readme", active: true, position: null },
  {
    text: "Work",
    active: false,
    position: null,
  },
  {
    text: "Projects",
    active: false,
    position: null,
  },
  {
    text: "Education",
    active: false,
    position: null,
  },
];

export default function Main() {
  const [visibleTab, setVisibleTab] = useState<number>(0);
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

  return (
    <main style={{ minHeight: "100vh" }}>
      <NameTitle
        tabs={TABS}
        tabToggle={handleTabToggle}
        displayContent={handleDisplayContent}
        setMainTab={handleSetMainTab}
      />
      <div className="flex flex-column" id="main">
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
          visibleTab={visibleTab}
          // mainTab={mainTab}
        />
      </div>
    </main>
  );
}
