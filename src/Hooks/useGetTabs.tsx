import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import {
  faTags,
  // faGraduationCap,
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
  // faTableList,
  faCube,
} from '@fortawesome/free-solid-svg-icons'
import Summary from '../main/content/Summary'
import Jobs from '../main/content/Jobs'
import Projects from '../main/content/Projects'
// import Education from '../main/content/Education'
import ExtraStuff from '../main/content/ExtraStuff'
import Dependencies from '../main/content/Dependencies'
import useGetGithubRepos from './useGetGithubRepos'
import useDependencies from './useDependencies'

export default function useGetTabs() {
  const { starredReadmes } = useGetGithubRepos()
  const { dependencies, dependents } = useDependencies()

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
      label: `${dependencies.length} Dependencies`,
      value: 'dependencies',
      icon: faCube,
      component: <Dependencies />,
    },
    {
      label: `${dependents.length} Dependents`,
      value: 'dependents',
      icon: faCubes,
      component: <Dependencies isDependents />,
    },
    {
      label: `${Object.keys(starredReadmes).length} Projects`,
      value: 'projects',
      // icon: faCubes,
      icon: faTags,
      component: <Projects />,
    },
    // {
    //   label: 'Education',
    //   value: 'education',
    //   icon: faGraduationCap,
    //   component: <Education />,
    // },
    // {
    //   label: 'Fun Stuff',
    //   value: 'funStuff',
    //   icon: faTags,
    //   component: <ExtraStuff />,
    // },
  ]
}
