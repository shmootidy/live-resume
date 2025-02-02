import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Contact = (props: any) => {
  const style = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: ".5rem 0 1rem",
    color: "rgba(0,0,0,.8)",
  };
  const [seeMoreText, setText] = useState("[ see more + ]");
  const [contactClass, setClass] = useState("see-more");
  const [hideContact, setHideContact] = useState(true);

  useEffect(() => {
    if (props.hideContact !== hideContact) {
      collapseContact();
    }
  });

  function handleToggle() {
    if (props.hideContact) {
      setText("[ see less - ]");
      props.toggleHideContact(false);
      setHideContact(false);
      setClass("see-less");
    } else {
      collapseContact();
    }
  }
  function collapseContact() {
    setText("[ see more + ]");
    props.toggleHideContact(true);
    setHideContact(true);
    setClass("see-more");
  }
  return (
    <div className="sidebar">
      <div className="contact">
        <div className="sidebar-subtitle">
          Contact{" "}
          <button
            onClick={handleToggle}
            style={{ border: 0, background: "white", color: "inherit" }}
            className="see-more"
          >
            {seeMoreText}
          </button>
        </div>
        <a
          href="mailto:shmooritchie@gmail.com?subject=I saw your resume!"
          className="contact-bar"
          id="email"
        >
          <img
            className="contact-icon absolute"
            alt="Email icon"
            src={require("../../assets/email.png")}
          />
          <span className="contact-info">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: 12, opacity: 0.3, marginRight: 6 }}
            />
            shmooritchie@gmail.com
          </span>
        </a>
      </div>
      <div className={"contact collapseable-contact " + contactClass}>
        <a href="tel:+1-604-616-0247" className="contact-bar" id="phone">
          <img
            className="contact-icon absolute"
            alt="Phone icon"
            src={require("../../assets/phone.png")}
          />
          <span className="contact-info">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: 12, opacity: 0.3, marginRight: 6 }}
            />
            604.616.0247
          </span>
        </a>
        <div style={{ marginLeft: ".25rem" }}>
          <div style={{ borderBottom: "1px solid #e1e1e1" }}>
            <div className="sidebar-subtitle">Linked In</div>
            <a
              style={style}
              href="https://www.linkedin.com/in/shmoo-ritchie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
              <span style={{ marginLeft: ".5rem" }}>
                linkedin.com/in/shmoo-ritchie
              </span>
            </a>
          </div>
          <div style={{ borderBottom: "1px solid #e1e1e1" }}>
            <div className="sidebar-subtitle">Repository</div>
            <a
              style={style}
              href="https://www.github.com/shmootidy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
              <span style={{ marginLeft: ".5rem" }}>github.com/shmootidy</span>
            </a>
          </div>
          {/* <div>
            <div className="sidebar-subtitle">Collaborators</div>
            <div style={style}>
              <img style={{width: '42px', height: '42px', minWidth: '42px', borderRadius: '4%'}} alt="avatar" src={require('../../assets/headshot.png')} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
