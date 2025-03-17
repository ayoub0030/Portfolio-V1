import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Big Data student",//a modifier
          "MERN Stack Developer",
          "Open Source Contributor",
          "Entrepreneur",
          "AI Agent Developers",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
