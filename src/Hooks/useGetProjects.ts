interface Project {
  title: string
  subtitle: string
  dateCompleted: string
  description: { [key: string]: string[] }
  techStack: { [key: string]: string }
  url: string
  img: string
  award?: boolean
}

export default function useGetProjects() {
  const projects: Project[] = [
    {
      title: "Medusa's Revenge",
      subtitle: 'Maze puzzle',
      dateCompleted: "Mar'21",
      description: {
        inspiration: [
          'Combining my love of watercolour painting, Greek mythology, and dungeon maze games.',
          'Keeping the pandemic blues at bay.',
        ],
        'Design & development': [
          'Hand-painted assets (by moi 💅).',
          'Fully responsive design.',
        ],
      },
      techStack: {
        framework: 'react.js',
        dependency: 'React Transition Group',
        hosting: 'github',
      },
      url: 'https://shmootidy.github.io/medusas_revenge/',
      img: 'medusa.png',
    },
    {
      title: 'This Resume',
      subtitle: 'Professional Reference',
      dateCompleted: "Aug'20",
      description: {
        design: ['Mimicked the style of npmjs.com through close study.'],
        development: [
          'Mobile-first design.',
          "Adapted npm's layout to emphasize pertinent resume information.",
        ],
        workflow: [
          'Frequent, clear commit messages.',
          'On-the-go code clean up and refactoring.',
        ],
        // new thing I learned: svg, React Hooks, IntersectionObserver, FontAwesome components
      },
      techStack: {
        framework: 'react.js',
        styling: 'SASS',
        hosting: 'github',
      },
      url: 'https://shmootidy.github.io/live-resume/',
      img: 'resume20.png',
    },
    {
      title: "Don't Panic",
      subtitle: 'Life Skills Education Game',
      dateCompleted: "Mar'19",
      description: {
        teamwork: [
          'Led a team of 3 developers from conception to presention in 13 days.',
          'Assigned tasks and managed workflow.',
        ],
        workflow: [
          'Fixed repository conflicts.',
          'Refactored code to maximize reusability and simplify debugging.',
        ],
        'design & development': [
          'Conceptualized and implemented the scoring logic.',
          'Integrated disparate features.',
        ],
      },
      techStack: {
        framework: 'crafty.js',
        database: 'mongodb',
        router: 'express',
        client: 'axios',
      },
      url: 'https://github.com/shmootidy/DONT-PANIC',
      img: 'dont-panic.gif',
      award: true,
    },
    {
      title: 'Smart Cat',
      subtitle: 'Auto-Categorizing To-Do List',
      dateCompleted: "Feb'19",
      description: {
        styling: ['Custom styled all elements using SASS and CSS3.'],
        APIs: [
          'Wrote custom algorithms that processed unfiltered data from the Wikipedia API.',
          'Developed categorizing logic.',
        ],
      },
      techStack: {
        styling: 'SASS',
        library: 'jQuery',
        client: 'AJAX',
        database: 'postgreSQL',
        queries: 'knex.js',
      },
      url: 'https://github.com/shmootidy/Smart-Cat',
      img: 'smart-cat.gif',
    },
  ]
  return projects
}
