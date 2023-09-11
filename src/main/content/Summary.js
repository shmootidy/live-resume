import React from 'react'

const Summary = (props) => {
  
  return (
    <div>
      <div id="summary">
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
        <p>Shmoo is a full-stack Intermediate Software Developer with 3+ years of professional experience. She has an eye for good design and interfaces, dubbed the "CSS Wizard" of her team.</p>
        <p>The <span className="highlight">shmoo</span> package contains high standards for quality code, a good attitude, and a track record of developing quality custom end-to-end features.</p>
        <p>Shmoo has a well-rounded background in customer service and education, bringing empathy, energy, and communication skills to your tech team.</p>
        {/* <p><a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!"><span className="highlight">Get in touch!</span></a></p> */}
      </div>
      <div>
        <h2 style={{
          margin: 0,
          borderBottom: '1px solid #ececec',
        }}>Usage</h2>
        <div style={{
          margin: '16px 0',
          fontSize: 16,
            background: 'rgb(247, 247, 247)',
            borderRadius: 2,
            padding: '13px 15px',
          }}>
          <code>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: 'rgb(215, 58, 73)' }}>import</span>
              {` { shmoosNumber, shmoosEmail } `}
              <span style={{ color: 'rgb(215, 58, 73)' }}>from</span>
              {` 'shmoos-live-resume'`}
            </div>
            <div>
              <span style={{ color: 'rgb(215, 58, 73)' }}>{`function `}</span>
              <span style={{ color: 'rgb(227, 98, 9)'  }}>contactShmoo</span>
              <span>{`() {`}</span>
              <div style={{
                margin: 16,
                display: 'flex',
                justifyContent: 'space-evenly',
              }}>
                <a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!" className='contact-shmoo-button'>
                  Click to email Shmoo
                </a>
                <a href="tel:+1-604-616-0247" className='contact-shmoo-button'>Click to call Shmoo</a>
              </div>
              <div>{`}`}</div>
            </div>
          </code>
        </div>
      </div>
    </div>
  )
}

export default Summary
