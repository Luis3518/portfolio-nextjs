import React from "react";
import Articulo from "./articulo";

function Articulos() {
  const articulos = [
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
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link:
        "https://github.com/Luis3518/Prometeo-desafio-PenTest"
    }
  ];
  return (
    <div className="articulosContainer">
      <h4>Articulos</h4>
      <div className="articulosContentContainer">
        {articulos.map((articulo, key) => {
          return (
            <Articulo
              title={articulo.title}
              description={articulo.desc}
              hashtags={articulo.hashtags}
              img={articulo.img}
              link={articulo.link}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Articulos;
