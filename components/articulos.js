import React from "react";
import Articulo from "./articulo";

function Articulos() {
  const articulos = [
    {
      title: "Fotos creadas con inteligencia artificial",
      desc:
        "Entreno la IA con mis fotos",
        hashtags:
        '#IA #Stable #Diffusion #Dreambooth',
      img:
        "ia.png",
      link: "https://www.linkedin.com/posts/luis-rodriguez3518_estuve-jugando-un-poco-con-stable-diffusion-activity-6995393697739608064-4DKu?"
    },
    {
        title: "-",
        desc:
          "-",
          hashtags:
          '#php #mysql #bootstrap #jquery #popper',
        img:
          ".png",
        link: "#"
    },
    {
      title: "",
      desc:
        '-',
      hashtags:
        '#burpsuite¿',
      img:
        "¿.png",
      link:
        "#"
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
