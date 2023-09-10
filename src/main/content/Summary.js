import React from 'react'

const Summary = (props) => {
  
  return (
    <div>
      <div id="summary">
        {/* <h1 className='content-title'>shmoo-ritchie</h1> */}
        <h1 style={{
          margin: 0,
          borderBottom: '1px solid #ececec',
        }}>
          <code style={{
            fontSize: 36,
            background: 'rgb(247, 247, 247)',
            fontWeight: 700,
            padding: '0 5px',
            color: 'rgb(17, 17, 17)',
          }}
          className='highlight'>shmoo</code>
        </h1>
        <p>Shmoo is a full-stack Intermediate Software Developer with 3+ years of professional experience. She has an eye for good design and interfaces.</p>
        <p>The <span className="highlight">shmoo</span> package contains high standards for quality code, a good attitude, and a track record of developing quality custom end-to-end features.</p>
        <p>Shmoo has a well-rounded background in customer service and education, bringing empathy, energy, and communication skills to your tech team.</p>
        <p><a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!"><span className="highlight">Get in touch!</span></a></p>
      </div>
    </div>
  )
}

export default Summary
