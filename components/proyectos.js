import React from "react";
import Proyecto from "./proyecto";

function Proyectos() {
  const proyectos = [
    {
      title: "Lubricentro Rafael - Registro de servicios",
      desc:
        "Prototipo de sistema para el registro de servicios",
        hashtags:
        '#php #mysql #bootstrap #jquery #popper',
      img:
        "lubrirafael.png",
      link: "https://luro35.000webhostapp.com/login.html"
    },
    {
        title: "Lubricentro Rafael - Consulta de servicios",
        desc:
          "Prototipo de sistema para la consulta de servicios realizados por parte del cliente",
          hashtags:
          '#php #mysql #bootstrap #jquery #popper',
        img:
          "lubrirafael.png",
        link: "http://luro35.000webhostapp.com"
    },
    {
      title: "Pentest prometeo",
      desc:
        'Reporte final del desafio pentest de prometeo, empresa de openbanking latinoamericana, realizado durante Junio de 2022.',
      hashtags:
        '#burpsuite #shodan #spiderfoot #zap',
      img:
        "prometeo.png",
      link:
        "https://github.com/Luis3518/Prometeo-desafio-PenTest"
    }
  ];
  return (
    <div className="articlesContainer">
      <h4>Proyectos</h4>
      <div className="articlesContentContainer">
        {proyectos.map((proyecto, key) => {
          return (
            <Proyecto
              title={proyecto.title}
              description={proyecto.desc}
              hashtags={proyecto.hashtags}
              img={proyecto.img}
              link={proyecto.link}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
