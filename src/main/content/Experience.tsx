import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Accomplishment {
  functionName: string;
  steps: string[];
  returnValue: string;
}

interface Job {
  title: string;
  employer: string;
  duration: string;
  location?: string;
  techStack: string[];
  accomplishments: Accomplishment[];
}

const Experience = () => {
  function removeSpaces(input: string) {
    return input.replace(/\s/g, "");
  }

  const jobs: Job[] = [
    {
      title: "Software Developer",
      employer: "Clir Renewables",
      duration: "Jun 21 – now",
      location: "Vancouver, BC",
      techStack: [
        "TypeScript",
        "Python",
        "ReactJS",
        "CSS",
        "Liquibase",
        "SQL",
        "ReactQuery",
        "AWS",
        "Jest",
        "Cypress",
        "YAML",
      ],
      accomplishments: [
        {
          functionName: "buildCustomFeatures",
          steps: [
            "UI design consultation",
            "work closely with Production Manager",
            "API development (AgGrid, QuillJS, Highcharts, ReactPdfRenderer)",
            "relational DB design (MariaDB)",
            "thorough unit & E2E testing (Jest, Cypress)",
            "meaningful code reviews",
          ],
          returnValue: "customEndToEndFeature",
        },
        {
          functionName: "squashBugs",
          steps: [
            "evaluate urgency",
            "explore root cause and estimate time it will take to remedy",
            "if quick to fix: fix it, write test to ensure it never happens again",
            "if needs time and is urgent: implement quicker fix; leave thorough documentation and create follow-up ticket",
            "discuss at next stand up",
          ],
          returnValue: "betterCodeMoreTeamKnowledge",
        },
        {
          functionName: "scrumLeader",
          steps: [
            "greet team: chit chat and settle in",
            "review PRs and ticket - ask questions, leave space for group discussion",
            "check in on what everyone is doing today",
            "ask for developments from Product Manager",
          ],
          returnValue: "cohesiveTeamWithDirection",
        },
        {
          functionName: "cssWizardOfTheTeam",
          steps: [
            "reliably translate designs into dynamic front end interfaces",
            "utilize and override 3rd-party APIs as needed",
            "mentor colleagues on solving complex style bugs",
          ],
          returnValue: "beautifulInterfaces",
        },
        {
          functionName: "leadSpikes",
          steps: [
            "evaluate scope of spiked challenge; discuss with PM and dev team for clarity as needed",
            "explore solutions on Stack Overflow, in API documentation and through trial-and-error",
            "write documentation with code samples, links, and screen recordings; outline possible solutions and (un)promising leads",
            "lead discussion with team to determine next steps",
          ],
          returnValue: "streamlinedStrategiesAndEnhancedTeamKnowledge",
        },
      ],
    },
    {
      title: "Web Developer & UI Consultant",
      employer: "Self-employed",
      duration: "Mar 20 – Jun 21",
      location: "Galiano Isl., BC",
      techStack: ["CSS", "Wordpress", "PHP", "Figma", "wireframe.cc"],
      accomplishments: [
        {
          functionName: "uiAndBrandConsultant",
          steps: [
            "help client refine, define and focus their branding",
            "determine purpose of website (eg. increase sales, enhance web presence, showcase community talent)",
            "develop outlines and strategies to achieving client goals",
          ],
          returnValue: "empoweredClient",
        },
        {
          functionName: "buildCustomHooksAndStyles",
          steps: [
            "write custom Wordpress hook to meet client needs (eg. track sales, display floating add-to-cart button)",
            "adapt Wordpress themes for more cohesive branding",
            "implement Google Analytics",
            "consult clients on appropriate plug-ins and assist in installation",
          ],
          returnValue: "goodSiteHappyClient",
        },
      ],
    },
    {
      title: "Junior Software Developer",
      employer: "Manacan Enterprises",
      duration: "Apr 19 – Mar 20",
      techStack: [
        "JavaScript",
        "PHP",
        "CSS",
        "React",
        "GoogleAnalytics",
        "Wordpress",
      ],
      accomplishments: [
        {
          functionName: "restyleEcommerceSites",
          steps: [
            "draft designs and wireframes",
            "resolve cross-browser incompatibilities",
            "build new custom features (eg. navigation bars, category sidebars, footers, product pages, modals)",
            "improve UX of in-site promotions to optimize lead generation",
            "refactor legacy CSS into organized SASS files",
          ],
          returnValue: "betterLookingBetterPerformingECommerceSites",
        },
        {
          functionName: "improveInterteamOperations",
          steps: [
            "liaise with 3rd party consultants",
            "develop better workflows between web teams and other departments",
            "establish and analyze Google Analytics",
          ],
          returnValue: "reduceFrustrationAndSaveTimeAndMoney",
        },
        {
          functionName: "reviseCustomerFacingCopy",
          steps: [
            "identify problematic, misleading and tonally harsh customer facing copy",
            "write better copy",
            "mentor copywriters on best copywriting practices",
            "reduce customer frustration and confusion; reduce incoming calls",
          ],
          returnValue: "happierCustomersHappierCustomerServiceTeam",
        },
        {
          functionName: "categorizeExistingInventory",
          steps: [
            "conceptualize architecture of new categories",
            "create algorithm to programmatically assign products to categories by scraping descriptions for key words",
            "write documentation for merchandising staff to ensure proper category assignment on new products",
          ],
          returnValue: "hundredsOfHoursOfLabourOutsourcedToAMachine",
        },
      ],
    },
  ];
  const [jobToDisplay, setJobToDisplay] = useState<Job | null>(null);
  const [linesOfCode, setLinesOfCode] = useState<number | null>(null);

  function handleClickEmployer(employer: string) {
    const job = jobs.find((job) => job.employer === employer);
    setJobToDisplay(job ?? null);
  }

  useEffect(() => {
    if (jobToDisplay) {
      // class open/close
      let lines = 2;
      jobToDisplay.accomplishments.forEach((acc) => {
        // function open/close + comments open/close + line break + returnValue
        lines += 2 + 2 + 1 + 1;
        lines += acc.steps.length;
      });
      // import open/close + line break
      lines += 2 + 1;
      lines += jobToDisplay.techStack.length;
      setLinesOfCode(lines);
    }
  }, [jobToDisplay]);

  return (
    <div id="experience">
      <div className="experience-wrapper">
        <div className="experience-head-item">
          <button
            onClick={() => setJobToDisplay(null)}
            className="experience-button"
          >
            / work /
          </button>
          <div>{jobToDisplay ? jobToDisplay.employer.toLowerCase() : null}</div>
        </div>
        {jobToDisplay ? (
          <div className="experience-back-wrapper">
            <button
              onClick={() => setJobToDisplay(null)}
              className="experience-button"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 8, paddingRight: 6 }}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span className="back">Back</span>
            </button>
            <div>{jobToDisplay.duration.toLowerCase()}</div>
          </div>
        ) : null}
        {jobToDisplay && linesOfCode ? (
          <div style={{ display: "flex", overflowX: "auto" }}>
            <pre className="experience-details-line-numbers">
              <code style={{ display: "flex", flexDirection: "column" }}>
                {[...Array(linesOfCode).keys()].map((l) => {
                  return <div key={l}>{l + 1}</div>;
                })}
              </code>
            </pre>
            <pre className="experience-details">
              <code>
                <div>
                  <span className="pink">{`import {`}</span>
                  {jobToDisplay.techStack.map((tech, i) => {
                    return (
                      <div style={{ marginLeft: 16 }} key={i}>{`${tech},`}</div>
                    );
                  })}
                  <div>
                    <span className="pink">{`} from `}</span>
                    <span>'techStack'</span>
                  </div>
                </div>
                <br />
                <div>
                  <span className="pink">class</span>
                  {` ${removeSpaces(jobToDisplay.title)} {`}
                </div>
                <div style={{ marginLeft: 16 }}>
                  {jobToDisplay.accomplishments.map((acc, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <span className="pink">function</span>
                          <span className="purple">{` ${acc.functionName}() {`}</span>
                        </div>
                        <div style={{ marginLeft: 16 }}>
                          {acc.steps.map((step, j) => {
                            return (
                              <div key={j}>
                                {j === 0 ? <div>{`/**`}</div> : null}
                                <div>{` * ${step}`}</div>
                                {j === acc.steps.length - 1 ? (
                                  <div>{`*/`}</div>
                                ) : null}
                              </div>
                            );
                          })}
                          <div>
                            <span className="pink">return</span>
                            <span className="blue">{` ${acc.returnValue}`}</span>
                          </div>
                        </div>
                        <div>{`}`}</div>
                        {i ===
                        jobToDisplay.accomplishments.length - 1 ? null : (
                          <br />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div>{`}`}</div>
              </code>
            </pre>
          </div>
        ) : (
          <div>
            {jobs.map((job, i) => {
              return (
                <div key={i} className="experience-job-item">
                  <div
                    style={{
                      display: "flex",
                      width: "40%",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <FontAwesomeIcon icon={faFileLines} />
                    </div>
                    <button
                      className="experience-button"
                      onClick={() => handleClickEmployer(job.employer)}
                    >
                      {job.employer.toLowerCase()}
                    </button>
                  </div>
                  <div style={{ width: "40%" }}>{job.title.toLowerCase()}</div>
                  <div style={{ width: "20%", textAlign: "right" }}>
                    {job.duration.toLowerCase()}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
