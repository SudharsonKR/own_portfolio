import React from "react";
import { Link } from "react-router-dom";
import "./Topcontent.css";

const Topcontent = () => {
  return (
    <div className="topcontent">
      <div className="topcontent_container">
        <h1>Mr. K. R. Sudharson</h1>
        <p>Full Stack Developer (MERN)</p>
        <p>
          I am actively seeking a MERN Stack development position. Eager and
          skilled in Full Stack (MERN), I have successfully achieved a
          certification course. <br />
          Excellent work efficiency and quick learning capabilities.
        </p>
        <a
          href="https://drive.google.com/file/d/1RJHGjQofhynj72eXPkFjRiwQf5LDX624/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="downloadbtn">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="workbtn">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default Topcontent;
