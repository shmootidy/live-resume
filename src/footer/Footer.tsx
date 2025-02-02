import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

export default function Footer() {
  // const points = "5.8,6.06 21.52,6.06 21.52,9.98 17.58,9.98 17.59,13 21.52,13 21.52,21.75 5.8,21.75 5.8,18.5 13.67,18.5 13.67,15.5 5.8,15.5"
  const points =
    "5.8 6.06 21.52 6.06 21.52 9.98 17.58 9.98 17.59 13 21.52 13 21.52 21.75 5.8 21.75 5.8 18.5 13.67 18.5 13.67 15.5 5.8 15.5";
  return (
    <div id="footer-container">
      <div className="footer-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.23 27.23">
          <rect fill="#333333" width="27.23" height="27.23" rx="2"></rect>
          <polygon fill="#fff" points={points}></polygon>
        </svg>
        <div className="footer-column">
          <div className="footer-heading">Contact Me</div>
          <a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!">
            shmooritchie@gmail.com
          </a>
          <a href="tel:+1-604-616-0247">604.616.0247</a>
        </div>
      </div>
      <div className="footer-icons">
        <a href="mailto:shmooritchie@gmail.com?subject=I saw your resume!">
          <FontAwesomeIcon icon={faAt} />
        </a>
        <a href="tel:+1-604-616-0247">
          <FontAwesomeIcon icon={faPhoneSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/shmoo-ritchie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          href="https://www.github.com/shmootidy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
      <div id="footer-banner"></div>
    </div>
  );
}
