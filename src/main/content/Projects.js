import React from 'react'
import Project from './Project'
import './projects.scss'

const Projects = (props) => {
  const projects = [
    // {
    //   title: 'Categorization Algorithm',
    //   subtitle: 'Product filtering system',
    //   dateCompleted: 'Dec\'19',
    //   description: {
    //     process: ['conceived of and brought to life'],
    //     teamwork: ['onboarded merch staff with in-person and written instruction']
    //   },
    //   techStack: {
    //     CMS: 'Wordpress',
    //     language: 'SQL'
    //   },
    //   url: '',
    //   img: ''
    // },
    // {
    //   title: 'Sliding Product Menu',
    //   subtitle: 'Lightweight Navigation for Mobile',
    //   dateCompleted: 'Jan\'20',
    //   description: {
    //     process: ['Brought static, 3rd-party designs to life.'],
    //     development: []
    //   },
    //   techStack: {
    //     library: 'jQuery',
    //     styling: 'SASS',
    //     CMS: 'Wordpress',
    //     language: 'PHP'
    //   },
    //   url: '',
    //   img: ''
    // },
    {
      title: 'This Resume',
      subtitle: 'Professional Reference',
      dateCompleted: 'Aug\'20',
      description: {
        design: ['Mimicked the style of npmjs.com through close study.'],
        development: ['Mobile-first design.', 'Adapted npm\'s layout to emphasize pertinent resume information.'],
        workflow: ['Frequent, clear commit messages.', 'On-the-go code clean up and refactoring.'],
        // new thing I learned: svg, React Hooks, IntersectionObserver, FontAwesome components
      },
      techStack: {
        framework: 'react.js',
        styling: 'SASS',
        hosting: 'github',
      },
      url: 'https://shmootidy.github.io/live-resume/',
      img: 'resume20.png'
    },
    { 
      title: 'Don\'t Panic',
      subtitle: 'Life Skills Education Game',
      dateCompleted: 'Mar\'19',
      description: {
        teamwork: ['Led a team of 3 developers from conception to presention in 13 days.', 'Assigned tasks and managed workflow.'],
        workflow: ['Fixed repository conflicts.', 'Refactored code to maximize reusability and simplify debugging.'],
        'design & development': ['Conceptualized and implemented the scoring logic.', 'Integrated disparate features.']
      },
      techStack: {
        framework: 'crafty.js',
        database: 'mongodb',
        router: 'express',
        client: 'axios'
      },
      url: 'https://github.com/shmootidy/DONT-PANIC',
      img: 'dont-panic.gif',
      award: true,
    },
    {
      title: 'Smart Cat',
      subtitle: 'Auto-Categorizing To-Do List',
      dateCompleted: 'Feb\'19',
      description: {
        styling: ['Custom styled all elements using SASS and CSS3.'],
        'APIs': ['Wrote custom algorithms that processed unfiltered data from the Wikipedia API.', 'Developed categorizing logic.'],
      },
      techStack: {
        styling: 'SASS',
        library: 'jQuery',
        client: 'AJAX',
        database: 'postgreSQL',
        queries: 'knex.js',
      },
      url: 'https://github.com/shmootidy/Smart-Cat',
      img: 'smart-cat.gif'
    },
    // {
    //   title: 'Tweeter',
    //   subtitle: 'Twitter Clone',
    //   dateCompleted: 'Jan \'19',
    //   description: ['Full-stack development project', 'Styling and DOM manipulation', 'Mongo requests'],
    //   techStack: ['jQuery', 'ExpressJS', 'BodyParser', 'MongoDB', 'Nodemon'] websocket (chatty)
    // },
    // {
    //   title: 'Tiny App',
    //   subtitle: 'URL-Shortening App',
    //   dateCompleted: 'Jan \'19',
    //   description: ['Text-shortening algorithm', 'Connect links', 'Create EJS partials', 'Protect user data with cookies and encryption software'],
    //   techStack: ['NodeJS', 'EJS', 'bcrypt', 'cookie-session']
    // }
  ]

  return (
    <div id="projects">
      <h2 className="content-title">Projects</h2>
      <Project projects={projects} />
    </div>
  )
}

export default Projects
