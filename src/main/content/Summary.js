import React from "react";

const Summary = (props) => {
  const libsAndFrames = ["react", "highcharts"];
  return (
    <div>
      <div id="summary">
        <h1
          style={{
            margin: 0,
            borderBottom: "1px solid #ececec",
          }}
        >
          <code
            style={{
              fontSize: 36,
              background: "rgb(247, 247, 247)",
              fontWeight: 700,
              padding: "0 5px",
              color: "rgb(17, 17, 17)",
            }}
            className="highlight"
          >
            shmoo
          </code>
        </h1>
        <p>
          Hi! I'm Shmoo. I'm an energetic, friendly software developer with
          dedicated to building beautiful and performant digital products that
          users love to use and clean, maintainable code that fellow developers
          love to build upon.
        </p>
        <p>I am passionate about:</p>
        <ul>
          <li>
            <strong>Debugging.</strong> Like a dog with a bone, I will track you
            down and I will squash you. And then, unlike a dog with a bone, I
            will write thorough tests and documentation to ensure the bug stays
            squashed.
          </li>
          <li>
            <strong>The quality of my code.</strong> I take great pride in what
            I produce. I care about the end user's experience as much as I care
            about developing, enforcing and following code conventions.
            Consistent practices make development easier, faster and frankly
            more enjoyable.
          </li>
          <li>
            <strong>Teamwork and collaboration.</strong> This one is important
            to me. I care about my teammates and believe that a strong sense of
            personal and professional support within a team goes a long way. A
            good team is a powerful force, but it doesn't happen by accident.
          </li>
        </ul>
        <p>
          With 5+ years in the industry and a background in education, musical
          performance, and customer service, I bring a unique set of skills to
          my role. Excellent communication skills, the ability to anticipate the
          needs of users, and a reflexive, creative approach to problem solving.
        </p>
        <p>I love building software. Let's do it together!</p>
      </div>
      <div>
        <h3
          style={{
            margin: 0,
            borderBottom: "1px dotted #ececec",
          }}
        >
          Libraries and Frameworks
        </h3>
        <ul
          style={{
            paddingLeft: 0,
            color: "#cb3837",
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          {libsAndFrames.map((lF, i) => {
            return (
              <li
                key={i}
                style={{
                  display: "inline-block",
                  padding: 4,
                  marginRight: 4,
                }}
              >
                {lF}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2
          style={{
            margin: 0,
            borderBottom: "1px dotted #ececec",
          }}
        >
          Usage
        </h2>
        <div
          style={{
            margin: "16px 0",
            fontSize: 16,
            background: "rgb(247, 247, 247)",
            borderRadius: 2,
            padding: "13px 15px",
          }}
        >
          <code>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "rgb(215, 58, 73)" }}>import</span>
              {` { shmoosNumber, shmoosEmail } `}
              <span style={{ color: "rgb(215, 58, 73)" }}>from</span>
              {` 'shmoos-live-resume'`}
            </div>
            <div>
              <span style={{ color: "rgb(215, 58, 73)" }}>{`function `}</span>
              <span style={{ color: "rgb(227, 98, 9)" }}>contactShmoo</span>
              <span>{`() {`}</span>
              <div
                style={{
                  margin: 16,
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <a
                  href="mailto:shmooritchie@gmail.com?subject=I saw your resume!"
                  className="contact-shmoo-button"
                >
                  Click to email Shmoo
                </a>
                <a href="tel:+1-604-616-0247" className="contact-shmoo-button">
                  Click to call Shmoo
                </a>
              </div>
              <div>{`}`}</div>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Summary;
