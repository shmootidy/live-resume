import React from 'react'
import Project from './Project'

const Projects = (props) => {
  const projects = [
    { 
      title: 'Don\'t Panic',
      subtitle: 'Life Skills Education Game',
      dateCompleted: 'Mar 2019',
      description: {
        leadership: 'led a team of 3 developers from conception to presention in 13 days',
        teamwork: 'collaboratively developed the concept, gameplay, design, and construction of the game with the team',
        'design & development': ['conceptualized and implemented the scoring logic', 'integrated disparate features', 'fixed repository conflicts', 'consistently refactored code to maximize reusability and simplify debugging']
      },
      // description: {
      //   plain: 'This educational prototype lets users experience the ',
      //   highlight: 'cumulative effects of habits on mental health',
      //   plain: ''
      // }
      // description: ['Game logistics', 'Scoring algorithms', 'Conceptual design', 'Workflow'],
      // description: ['team leadership', 'game logistics', 'scoring algorithms', 'conceptual design', 'group workflow', 'refactoring', 'debugging'],
      techStack: {
        framework: 'crafty.js',
        database: 'mongodb',
        routing: 'express / axios',
      },
      url: 'https://github.com/shmootidy/DONT-PANIC',
      img: 'dont-panic.gif',
      award: true,
    },
    {
      title: 'Chatty App',
      subtitle: 'Real-time Chat App',
      dateCompleted: 'Feb 2019',
      description: ['Set up local server', 'Style elements', 'Modularize data structure'],
      techStack: {
        framework: 'react',
        routing: 'websocket',
        // there's more! what about the API?
      },
      url: 'https://github.com/shmootidy/Chatty',
      img: 'chatty.png'
    },
    {
      title: 'Smart Cat',
      subtitle: 'Auto-Categorizing To-Do List',
      dateCompleted: 'Feb 2019',
      description: ['Wikipedia API requests', 'Categorizing algorithm', 'Custom styling', 'AJAX requests & Knex calls'],
      techStack: {
        database: 'postgreSQL / knex',
        styling: 'CSS / SASS',
        routing: 'AJAX', 
      },
      url: 'https://github.com/shmootidy/Smart-Cat',
      img: 'smart-cat.jpg'
    },
    // {
    //   title: 'Tweeter',
    //   subtitle: 'Twitter Clone',
    //   dateCompleted: 'Jan \'19',
    //   description: ['Full-stack development project', 'Styling and DOM manipulation', 'Mongo requests'],
    //   techStack: ['jQuery', 'ExpressJS', 'BodyParser', 'MongoDB', 'Nodemon']
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
