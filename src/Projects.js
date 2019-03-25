import React, { Component } from 'react'
import Project from './Project'

const Projects = (props) => {
  const projects = [
    { 
      title: 'Don\'t Panic',
      description: 'Life Skills Education Game',
      dateCompleted: 'Mar \'19',
      myContribution: ['Game logistics', 'Scoring algorithms', 'Conceptual design', 'Workflow'],
      techStack: ['CraftyJS', 'MongoDB', 'Express/Axios']
    },
    {
      title: 'Chatty App',
      description: 'Real-time Chat App',
      dateCompleted: 'Feb \'19',
      myContribution: ['Set up local server', 'Style elements', 'Modularize data structure'],
      techStack: ['React', 'Websocket']
    },
    {
      title: 'Smart Cat',
      description: 'Auto-Categorizing To-Do List',
      dateCompleted: 'Feb \'19',
      myContribution: ['Wikipedia API requests', 'Categorizing algorithm', 'Custom styling', 'AJAX requests & Knex calls'],
      techStack: ['AJAX', 'CSS / SASS', 'Knex', 'PostgreSQL']
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
