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
        "IA.png",
      link: "https://www.linkedin.com/posts/luis-rodriguez3518_estuve-jugando-un-poco-con-stable-diffusion-activity-6995393697739608064-4DKu?"
    },
    {
        title: "Visualización de datos",
        desc:
          "Analisis de datos con graficos visualmente atractivos a partir de chats de whatsapp",
          hashtags:
          '#python #pandas #matplotlib #wordcloud #whatsapp #data',
        img:
          "foto3.png",
        link: "https://www.linkedin.com/posts/luis-rodriguez3518_python-pandas-whatsapp-activity-7017259762534768640-yQ1g"
    },
    {
      title: "Optimizando procesos con Chatgpt",
      desc:
        'Herraientas que utilizo todos los dias, artículo escrito por Chatgpt de Openai',
      hashtags:
        '#chatgpt #ai',
      img:
        "openai.png",
      link:
        "#"
    }
  ];
  return (
    <div className="articulosContainer">
      <h4>Artículos</h4>
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
