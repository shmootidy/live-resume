import React, { Component } from 'react'
import Job from './Job'

export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [
        { 
          title: 'Bartender',
          employer: 'The Emerald Lounge',
          duration: 'Mar \'18 - Dec \'18',
          skills: 'Solid Team Player'
        },
        {
          title: 'Company Owner',
          employer: 'Lionheart Sleep School',
          duration: 'Jul \'16 - Nov \'18',
          skills: 'Brand Development'
        },
        {
          title: 'High School Teacher',
          employer: 'Avenir School Society',
          duration: 'Feb \'14 - Jun \'15',
          skills: 'Managing Long-Term, Complex Projects'
        },
        {
          title: 'Musician',
          employer: 'The Organ / Keep Tidy',
          duration: 'Nov \'04 - Sep \'12',
          skills: 'Live Performance'
        }
      ]
    }
  }
  render() {
    const jobs = this.state.jobs.map(job => {
      return <Job job={job} key={job.title} />
    })
    return (
      <div id="experience">
        <h2 className="content-title">Experience</h2>
        {jobs}
      </div>
    )
  }
}