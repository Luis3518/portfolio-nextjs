import React from "react";

function ExperienceCard(props) {
  const { name, role, from, to, logo } = props;
  return (
    <div className="experienceCardContainer">
      <div className="imgContainer">
        <img src={logo} />
        {name && <h5>{name}</h5>}
      </div>
      <p className="date">
        {from} - {to}{" "}
      </p>
      <p>{role}</p>
    </div>
  );
}

export default ExperienceCard;
