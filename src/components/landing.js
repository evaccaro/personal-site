import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div id="Landing">
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <a href="#">Home</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
              <a href="#">Bio</a>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" />
            <div className="narrowLinks">
              <a href="#">Home</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
              <a href="#">Bio</a>
            </div>
          </div>
        </nav>
        <div id="container">
          <p>
            <a id="header">Elisa Rose</a>
          </p>
          <p id="blurb">Software Engineer</p>
          <img src="ProfilePic.jpg" height="150" width="150" id="profile" />

          <div id="aboutBox">
            <p />
            <a href="https://github.com/evaccaro" target="_blank">
              <img src="GitHub.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/elisa-vaccaro-18a9429a/"
              target="_blank"
            >
              <img src="LinkedIn.png" />
            </a>
            <a href="https://medium.com/@elisavaccaro" target="_blank">
              <img src="Medium.png" />
            </a>
            <a href="Resume.pdf" target="_blank">
              <img src="ResumeIcon.png" />
            </a>

            <p />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
