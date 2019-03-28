import React from 'react'
import Project from './Project'
import './projects.css'

const Projects = (props) => {
  const projects = [
    { 
      title: 'Don\'t Panic',
      subtitle: 'Life Skills Education Game',
      dateCompleted: 'Mar 2019',
      description: {
        leadership: ['Led a team of 3 developers from conception to presention in 13 days.'],
        // teamwork: ['collaboratively developed the concept, gameplay, design, and construction of the game'],
        workflow: ['Fixed repository conflicts.', 'Refactored code to maximize reusability and simplify debugging.'],
        'design & development': ['Conceptualized and implemented the scoring logic.', 'Integrated disparate features.']
      },
      techStack: ['CraftyJS', 'MongoDB', 'Express', 'Axios'],
      url: 'https://github.com/shmootidy/DONT-PANIC',
      img: 'dont-panic.gif',
      award: true,
    },
    {
      title: 'Chatty App',
      subtitle: 'Real-time Chat App',
      dateCompleted: 'Feb 2019',
      description: {beep:['Set up local server', 'Style elements', 'Modularize data structure']},
      techStack: ['React', 'Websocket'],
        // there's more! what about the API?
      url: 'https://github.com/shmootidy/Chatty',
      img: 'chatty.jpg'
    },
    {
      title: 'Smart Cat',
      subtitle: 'Auto-Categorizing To-Do List',
      dateCompleted: 'Feb 2019',
      description: {boop:['Wikipedia API requests', 'Categorizing algorithm', 'Custom styling', 'AJAX requests & Knex calls']},
      techStack: ['PostgreSQL', 'Knex', 'CSS', 'SASS', 'AJAX'],
      url: 'https://github.com/shmootidy/Smart-Cat',
      img: 'smart-cat.gif'
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
