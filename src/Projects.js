import React from 'react'
import Project from './Project'

const Projects = (props) => {
  const projects = [
    { 
      title: 'Don\'t Panic',
      description: 'Life Skills Education Game',
      dateCompleted: 'Mar 2019',
      myContribution: ['Game logistics', 'Scoring algorithms', 'Conceptual design', 'Workflow'],
      // myContribution: ['team leadership', 'game logistics', 'scoring algorithms', 'conceptual design', 'group workflow', 'refactoring', 'debugging'],
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
      description: 'Real-time Chat App',
      dateCompleted: 'Feb 2019',
      myContribution: ['Set up local server', 'Style elements', 'Modularize data structure'],
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
      description: 'Auto-Categorizing To-Do List',
      dateCompleted: 'Feb 2019',
      myContribution: ['Wikipedia API requests', 'Categorizing algorithm', 'Custom styling', 'AJAX requests & Knex calls'],
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
    //   description: 'Twitter Clone',
    //   dateCompleted: 'Jan \'19',
    //   myContribution: ['Full-stack development project', 'Styling and DOM manipulation', 'Mongo requests'],
    //   techStack: ['jQuery', 'ExpressJS', 'BodyParser', 'MongoDB', 'Nodemon']
    // },
    // {
    //   title: 'Tiny App',
    //   description: 'URL-Shortening App',
    //   dateCompleted: 'Jan \'19',
    //   myContribution: ['Text-shortening algorithm', 'Connect links', 'Create EJS partials', 'Protect user data with cookies and encryption software'],
    //   techStack: ['NodeJS', 'EJS', 'bcrypt', 'cookie-session']
    // }
  ]

  return (
    <div id="projects">
      <h2 className="content-title">Projects</h2>
      <ul><Project projects={projects} /></ul>
    </div>
  )
}

export default Projects
