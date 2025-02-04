import React, { useState } from "react";
import Content from "./content/Content";
import Tabs from "./name-title-tabs/Tabs";

import "./main.scss";
import "./_responsive.scss";
import "./sidebar/sidebar.scss";

export default function Main() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

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
        <div className="flex flex-column" id="main">
          <Tabs selectedTab={selectedTab} onChangeTab={setSelectedTab} />
          <Content visibleTab={selectedTab} />
        </div>
      </div>
    </main>
  );
}
