import React, { useEffect } from "react";
import Tab from "./Tab";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faTags,
  faGraduationCap,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import "./tabs.scss";

interface IProps {
  selectedTab: number;
  onChangeTab: (tabIndex: number) => void;
}

export default function Tabs(props: IProps) {
  const { selectedTab, onChangeTab } = props;

  const TABS = [
    {
      label: "Readme",
      icon: faFileAlt,
      fontColor: "#9e7700",
      backgroundColor: "#ffcd3a33",
      borderColor: "#FFCD3A",
    },
    {
      label: "Work",
      icon: faTags,
      fontColor: "#cb3837",
      backgroundColor: "#cb383733",
      borderColor: "#cb3837",
    },
    {
      label: "Projects",
      icon: faCubes,
      fontColor: "#782175",
      backgroundColor: "#c836c333",
      borderColor: "#C836C3",
    },
    {
      label: "Education",
      icon: faGraduationCap,
      fontColor: "#29008a",
      backgroundColor: "#8956ff33",
      borderColor: "#8956ff",
    },
  ];

  return (
    <div>
      <ul style={{ display: "flex", width: "100%" }}>
        {TABS.map((tab, i) => {
          const isSelected = i === selectedTab;
          return (
            <li
              key={i}
              onClick={() => onChangeTab(i)}
              style={{
                flexGrow: 1,
                textAlign: "center",
                borderRadius: "5px 5px 0 0",
                background: isSelected ? tab.backgroundColor : "white",
                color: tab.fontColor,
                border: `1px solid ${
                  isSelected ? tab.borderColor : "transparent"
                }`,
              }}
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
