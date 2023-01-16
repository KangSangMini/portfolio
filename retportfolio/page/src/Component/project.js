import React from "react";
import "./project.css";
import PropTypes from "prop-types";

const projectlist = [
  {
    name: "project1",
    image: "/email1.jpg",
  },
  {
    name: "project2",
    image: "/email1.jpg",
  },
  {
    name: "project3",
    image: "/email1.jpg",
  },
];

function Pj({ name, image }) {
  return (
    <div className="project-wrap">
      <div className="flip">
        <div className="front">
          <h3>{name}</h3>
          <img src={image} alt="img" id="project-img" />
        </div>
        <div className="back">
          <h3>프로젝트설명</h3>
        </div>
      </div>
    </div>
  );
}
Pj.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function renderPj(v1) {
  return <Pj name={v1.name} image={v1.image} />;
}

function Project() {
  return <div className="pmap">{projectlist.map(renderPj)}</div>;
}
export default Project;
