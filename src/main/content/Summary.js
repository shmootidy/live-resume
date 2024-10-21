import React from "react";

const Summary = (props) => {
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
          Shmoo is a Software Developer with 5+ years of experience creating
          intuitive, user-centric products that align business priorities with
          customer needs.
        </p>
        <p>
          With an intuitive eye for clean interfaces and a deep understanding of
          the user experience, she excels in leading and contributing to
          projects. Shmoo thrives in both collaborative and autonomous roles,
          driving innovative solutions while ensuring practicality.
        </p>
        <p>
          Known for her approachable and fun work style, she is passionate about
          building products that not only function beautifully but bring joy to
          users.
        </p>
      </div>
      <div>
        <h2
          style={{
            margin: 0,
            borderBottom: "1px solid #ececec",
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
