import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';



function Description() {
  return (

<div className="descriptionContainer">
<div className="contentContainer">
        <h1>Hola! Soy Luis Rodriguez</h1>
        <h4>
        Profesor de informática y especialista en seguridad informática, estoy constantemente buscando nuevas oportunidades para aprender y crecer en mi campo. Actualmente estoy cursando una licenciatura en tecnología de la información y me encanta estar al día con las últimas tendencias y herramientas en el mundo de la informática. Me gusta experimentar con nuevas tecnologías, especialmente en áreas como la ciberseguridad e inteligencia artificial.
        </h4>
        <div className="socialContainer">
          <a href="https://github.com/Luis3518/" target="_blank">
            <FaGithub size={70} className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/luis-rodriguez3518/">
            <FaLinkedin size={70} className="icon"/>
          </a>
          <a href="https://twitter.com/Lu1sR0driguez">
            <FaTwitter size={70} className="icon"/>
          </a>
        </div>
        </div>
        </div>
  );
}

export default Description;
