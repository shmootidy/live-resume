import React from "react";

const Education = () => {
  const educationArr = [
    {
      school: "Book Club",
      awarded: "Professional Development",
      year: "2021 – ongoing",
      skills: ["Studied and discussed a variety of books with colleagues:"],
      // subPoints: ['99 Bottles of OOP', 'Building Microservices', 'Pragmatic Programmer', 'Grokking Algorithms'],
      books: [
        {
          title: "99 Bottle of OOP",
          author: "Sandi Metz, Katrina Owen & TJ Stankus",
        },
        {
          title: "Building Microservices",
          author: "Sam Newman",
        },
        {
          title: "Pragmatic Programmer",
          author: "Andy Hunt & Dave Thomas",
        },
        {
          title: "Grokking Algorithms",
          author: "Aditya Y. Bhargava",
        },
      ],
    },
    {
      school: "Lighthouse Labs",
      awarded: "Diploma of Web Development",
      year: "2019",
      skills: [
        "Awarded Best Final Project.",
        "Learned fundamentals of web development.",
        "Practiced various programming languages, including JavaScript, Ruby, SQL.",
        "Led team of new developers in complex project with new tools under tight deadline.",
      ],
    },
    {
      school: "UBC",
      awarded: "Bachelor of Education",
      year: "2012",
      skills: [
        "Learned pedagogical models.",
        "Improved collaborative skills.",
        "Performed and facilitated hours of public speaking and group engagement.",
      ],
    },
    {
      school: "UBC",
      awarded: "Bachelor of Arts",
      year: "2011",
      skills: [
        "Honed critical thinking and communication skills.",
        "Broadened my historical and cultural understanding.",
        "Developed disciplined, independent working schedule.",
      ],
    },
  ];

  let education = educationArr.map((education, i) => {
    return (
      <div className="education" key={i}>
        <div className="awarded green">{education.awarded.toUpperCase()}</div>
        <span
          style={{ margin: 0 }}
          className="flex space-between project-subtitle"
        >
          <span className="school">{education.school}</span>
          <span className="year">{education.year}</span>
        </span>
        <div style={{ marginLeft: 16 }}>
          {education.skills.map((skill, j) => {
            return <div key={j}>{skill}</div>;
          })}
          {education.books ? (
            <div style={{ marginLeft: 24 }}>
              {education.books.map((book, j) => {
                return (
                  <div key={j}>
                    <i>{book.title}</i>, {book.author}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
  });

  return (
    <div id="education">
      <h2 className="content-title">Education</h2>
      <div>{education}</div>
    </div>
  );
};

export default Education;
