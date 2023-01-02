import React from "react";
import experience from "../data/experience.json";
import ExperienceCard from "./experiencecard";

function Experience() {
  return (
    <div className="experienceContainer">
      <h4>Experiencia</h4>
      <div className="experienceContentContainer">
        <div className="line" />
        <div className="verticalLine" />
        <div className="secondLine" />
        {experience.map((experience, key) => {
          return (
            <ExperienceCard
              name={experience.name}
              role={experience.role}
              from={experience.from}
              to={experience.to}
              description={experience.description}
              logo={experience.logo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
