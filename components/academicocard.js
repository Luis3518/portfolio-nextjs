import React from "react";

function AcademicoCard(props) {
  const { name, role, from, to, logo } = props;
  return (
    <div className="academicoCardContainer">
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

export default AcademicoCard;
