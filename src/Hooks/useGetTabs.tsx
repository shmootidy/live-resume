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
import Summary from '../main/content/Summary'
import Jobs from '../main/content/Jobs'
import Projects from '../main/content/Projects'
import Education from '../main/content/Education'
import ExtraStuff from '../main/content/ExtraStuff'

export default function useGetTabs() {
  return [
    {
      label: 'Readme',
      value: 'readme',
      icon: faFileAlt,
      component: <Summary />,
    },
    {
      label: 'Work',
      value: 'work',
      icon: faFileZipper,
      component: <Jobs />,
    },
    {
      label: 'Projects',
      value: 'projects',
      icon: faCubes,
      component: <Projects />,
    },
    {
      label: 'Education',
      value: 'education',
      icon: faGraduationCap,
      component: <Education />,
    },
    {
      label: 'Another One',
      value: 'anotherOne',
      icon: faTableList,
      component: <ExtraStuff />,
    },
  ]
}
