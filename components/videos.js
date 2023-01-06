import React from "react";
import Video from "./video";

function Videos() {
  const videos = [
    {
      title: "Tutorial cisco packet tracer",
      desc:
        'Como entrar a google desde cisco packet tracer - video utilizado en la materia redes',
      hashtags:
        '#cisco #paket #tracer #network #dhcp #dns #educacion',
      img:
        "cptgoogle.png",
      link:
        "https://www.youtube.com/watch?v=TEOvPIw-QtA&t"
    },
    {
      title: "Ethical Hacking - Informe ejecutivo . UTN",
      desc:
        "Ejercicio de simulacion realizado en el marco de la diplomatura en seguridad de la información de un reporte analisis de vulnerabilidades",
        hashtags:
        '#php #apache #google #dorking #password #ZAP',
      img:
        "diplo.png",
      link: "https://www.youtube.com/watch?v=vNDF0cmGX0Y"
    },
    {
      title: "Dispositivos intermedios",
      desc:
        'Diferencias entre: modem, router y switch - video utilizado en la materia redes',
      hashtags:
      '#modem #router #switch #network #educacion',
      img:
        "modemrouter.png",
      link:
        "https://youtu.be/gdmTT3zl1To"
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
