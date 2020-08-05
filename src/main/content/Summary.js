import React from 'react'

const Summary = (props) => {
  return (
    <div id="summary">
      <h1 className='content-title'>shmoo-ritchie</h1>
      {/* <p>Passionate about building the best possible product</p> */}
      {/* <p>Passionate about development, design, and <span className="highlight">web development best practices.</span> Tenacity, resourcefulness, and creativity honed from experience as a teacher, musician, and entrepreneur. A <span className="highlight">driven self-starter</span> who enjoys working collaboratively and is always keen to learn and improve.</p> */}
      <p>Hi, I'm Shmoo! Thanks for visiting my live resume, designed to mimic the style of the popular developer resource, npm. Have you got an interesting project or position for a driven problem-solver? Want to work with an enthusiastic, reliable developer? <a href="mailto:shmooritchie@gmail.com"><span className="highlight">Get in touch!</span></a></p>
      <p>Scroll down to see a list of some of my developer skills. (My soft skills are good too, promise!) To see the projects I've worked on and my employment history, click on the coloured tabs above.</p>
    </div>
  )
}

export default Summary
