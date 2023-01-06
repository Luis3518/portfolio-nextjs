import React from "react";
import academico from "../data/academico.json";
import AcademicoCard from "./academicocard";

function Academico() {
  return (
    <div className="academicoContainer">
      <h4>Académico</h4>
      <div className="academicoContentContainer">
        <div className="line" />
        <div className="verticalLine" />
        <div className="secondLine" />
        {academico.map((academico, key) => {
          return (
            <AcademicoCard
              name={academico.name}
              role={academico.role}
              from={academico.from}
              to={academico.to}
              description={academico.description}
              logo={academico.logo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Academico;
