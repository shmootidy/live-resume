import styled from '@emotion/styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useGetTabs from '../../Hooks/useGetTabs'
import useNpmSequentialColors from '../../Hooks/useNpmSequentialColors'

interface IProps {
  selectedTab: string
  onChangeTab: (tabValue: string) => void
}

export default function Tabs(props: IProps) {
  const { selectedTab, onChangeTab } = props
  const tabs = useGetTabs()
  const npmSequentialColors = useNpmSequentialColors()

  return (
    <div>
      <TabsList>
        {tabs.map((tab, i) => {
          const tabColors = npmSequentialColors[i % npmSequentialColors.length]
          return (
            <Tab
              key={i}
              onClick={() => onChangeTab(tab.value)}
              isSelected={tab.value === selectedTab}
              borderColor={tabColors.borderColor}
              backgroundColor={tabColors.backgroundColor}
              fontColor={tabColors.fontColor}
            >
              {<FontAwesomeIcon icon={tab.icon} style={{ marginRight: 8 }} />}
              {tab.label}
            </Tab>
          )
        })}
      </TabsList>
    </div>
  )
}

const Tab = styled.li<{
  isSelected: boolean
  backgroundColor: string
  borderColor: string
  fontColor: string
}>`
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  display: block;
  padding: 0.7rem 2rem;
  background: ${(props) =>
    props.isSelected ? props.backgroundColor : 'white'};
  color: ${(props) => props.fontColor};
  border: ${(props) =>
    props.isSelected ? `1px solid ${props.borderColor}` : ''};

  @media (max-width: 960px) {
    border-radius: 0 5px 5px 0;
    border-left: ${(props) =>
      `${props.isSelected ? '1px' : '2px'} solid ${props.borderColor}`};
  }

  @media (min-width: 960px) {
    border-radius: 5px 5px 0 0;
    border-bottom: ${(props) =>
      `${props.isSelected ? '1px' : '2px'} solid ${props.borderColor}`};
  }
  &:hover {
    background: ${(props) => props.backgroundColor};
  }
`

const TabsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`
