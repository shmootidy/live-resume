const Skills = () => {
  const _skills = {
    languages: [
      'TypeScript',
      'JavaScript',
      'Python',
      'PHP',
      'SQL',
      'CSS',
      'YAML',
    ],
    libraries: ['liquibase', 'React', 'Sass'],
    // 'general practices': ['documentation', 'DRY code', 'Helpful commit messages'],
    // 'web technologies': ['APIs (Wikipedia, Yelp, Github)', 'AJAX'],
    // 'authentication': ['bcrpyt', 'session-cookies', 'md5'],
    // 'middleware': ['body-parser', 'Babel'],
    // 'languages': ['JavaScript', 'PHP', 'Ruby', 'HTML5', 'CSS3', 'SQL'],
    // 'libraries & frameworks': ['ReactJS', 'jQuery', 'Rails', 'Knex', 'CraftyJS', 'EJS', 'SASS', 'JSX'],
    // 'servers / routing': ['Express', 'Rails', 'React', 'Websocket', 'Axios'],
    // 'testing': ['Mocha / Chai', 'RSpec'],
    // 'database': ['PostgreSQL', 'mySqlite', 'MongoDB'],
    // 'web debug tools': ['Chrome dev tools'],
    // 'version control': ['git', 'github', 'BitBucket'],
    // 'package managers': ['node', 'yarn', 'gems'],
  }
  let skills = Object.entries(_skills).map((skill) => {
    let skillType = makeTitleCase(skill[0])
    let skillList = skill[1].map((skillItem) => (
      <span key={skillItem} className='skill-items'>
        {skillItem}
      </span>
    ))

    return (
      <div key={skillType} style={{ marginLeft: 16 }}>
        <div className='skill-subtitle description-key'>{skillType}</div>
        <div className='skills-list'>{skillList}</div>
      </div>
    )
  })

  return (
    <div id='skills'>
      <h2
        style={{
          margin: 0,
          borderBottom: '1px solid #ececec',
        }}
      >
        Overview
      </h2>
      <div className='all-skills'>{skills}</div>
    </div>
  )
}

export default Skills

// HELPER
// adapted from https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function makeTitleCase(string: string) {
  let splitString = string.toLowerCase().split(' ')
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
  }
  return splitString.join(' ')
}
