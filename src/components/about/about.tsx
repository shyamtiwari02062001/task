import React from "react";
import "./about.css";
import Card from "./card";

const About = () => {
  return (
    <div className="about-container">
      <div className="card-section">
        <div className="card-row">
          <div className="card-column">
            <Card />
            <Card />
          </div>
          <div className="card-columns">
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="about-course-section">
        <div className="about-course-content">
          <p className="aboutText">About the Course</p>
          <p className="aboutCourseText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="exploreButton">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
