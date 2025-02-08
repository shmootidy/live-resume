import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import {
  // faTags,
  faGraduationCap,
  faCubes,
  faFileZipper,
  // faLightbulb,
  // faTimeline,
  // faLaptopCode,
  // faChartPie,
  // faBugs,
  // faBugSlash,
  // faFolderOpen,
  // faGears,
  faTableList,
} from '@fortawesome/free-solid-svg-icons'

export default function useGetTabs() {
  return [
    {
      label: 'Readme',
      value: 'readme',
      icon: faFileAlt,
      fontColor: '#9e7700',
      backgroundColor: '#ffcd3a33',
      borderColor: '#FFCD3A',
    },
    {
      label: 'Work',
      value: 'work',
      // icon: faTags,
      icon: faFileZipper,
      fontColor: '#cb3837',
      backgroundColor: '#cb383733',
      borderColor: '#cb3837',
    },
    {
      label: 'Projects',
      value: 'projects',
      icon: faCubes,
      fontColor: '#782175',
      backgroundColor: '#c836c333',
      borderColor: '#C836C3',
    },
    {
      label: 'Education',
      value: 'education',
      icon: faGraduationCap,
      fontColor: '#29008a',
      backgroundColor: '#8956ff33',
      borderColor: '#8956ff',
    },
    {
      label: 'Another One',
      value: 'anotherOne',
      // icon: faLightbulb,
      // icon: faTimeline,
      icon: faTableList,
      fontColor: '#146c91',
      backgroundColor: '#29abe233',
      borderColor: '#29abe2',
    },
  ]
}
