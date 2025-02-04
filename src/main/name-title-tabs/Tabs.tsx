import React, { useEffect } from "react";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faTags,
  faGraduationCap,
  faCubes,
  faFileZipper,
  faLightbulb,
  faTimeline,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./tabs.scss";

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
      // icon: faTags,
      icon: faFileZipper,
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
    {
      label: "Another One",
      // icon: faLightbulb,
      // icon: faTimeline,
      icon: faTableList,
      fontColor: "#146c91",
      backgroundColor: "#29abe233",
      borderColor: "#29abe2",
    },
  ];

  return (
    <div>
      <ul style={{ display: "flex", width: "100%", margin: 0, padding: 0 }}>
        {TABS.map((tab, i) => {
          return (
            <Tab
              key={i}
              onClick={() => onChangeTab(i)}
              isSelected={i === selectedTab}
              borderColor={tab.borderColor}
              backgroundColor={tab.backgroundColor}
              fontColor={tab.fontColor}
            >
              {<FontAwesomeIcon icon={tab.icon} style={{ marginRight: 8 }} />}
              {tab.label}
            </Tab>
          );
        })}
      </ul>
    </div>
  );
}

const Tab = styled.li<{
  isSelected: boolean;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
}>`
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  background: ${(props) =>
    props.isSelected ? props.backgroundColor : "white"};
  color: ${(props) => props.fontColor};
  border: ${(props) =>
    props.isSelected ? `1px solid ${props.borderColor}` : ""};
  border-bottom: ${(props) =>
    `${props.isSelected ? "1px" : "2px"} solid ${props.borderColor}`};
  &:hover {
    background: ${(props) => props.backgroundColor};
  }
`;
