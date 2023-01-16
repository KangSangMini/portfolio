import React from "react";
import "./skill.css";

function Skill() {
  return (
    <div className="skill-wrap">
      <div className="skill-box" id="box1">
        <span>
          <h1>Frontend</h1>
        </span>
        <hr />
        <img className="frontimage" alt="front" src="/front.jpg" />
        <img className="frontimage" alt="react" src="/react.png" />
      </div>
      <div className="skill-box" id="box2">
        <span>
          <h1>Deployment</h1>
        </span>
        <hr />
        <img className="frontimage2" alt="aws" src="/aws.png" />
      </div>
      <div className="skill-box" id="box3">
        <span>
          <h1>Version Control</h1>
        </span>
        <hr />
        <img className="frontimage" alt="git" src="/git.png" />
        <img className="frontimage" alt="github" src="/github.jpg" />
      </div>
      <div className="skill-box" id="box4">
        <span>
          <h1>Communication</h1>
        </span>
        <hr />
        <img className="frontimage2" alt="figma" src="/figma.png" />
      </div>
      <div className="skill-box" id="box5">
        <span>
          <h1>Server</h1>
        </span>
        <hr />
        <img className="frontimage2" alt="node" src="/node.png" />
      </div>
    </div>
  );
}

export default Skill;
