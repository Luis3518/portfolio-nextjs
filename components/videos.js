import React from "react";
import Video from "./video";

function Videos() {
  const videos = [
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
    <div className="articlesContainer">
      <h4>Videos</h4>
      <div className="articlesContentContainer">
        {videos.map((video, key) => {
          return (
            <Video
              title={video.title}
              description={video.desc}
              hashtags={video.hashtags}
              img={video.img}
              link={video.link}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
