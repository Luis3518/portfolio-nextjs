import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';



function Description() {
  return (

<div className="descriptionContainer">
<div className="contentContainer">
        <h1>Hola! Soy Luis Rodriguez</h1>
        <h4>
        Profesor de informática, especialista en seguridad informática y en este momento cursando la Licenciatura en tecnología de la información.
        Me considero un apasionado del mundo de la informática y las tecnologías disruptivas, entre ellas web3 e inteligencia artificial.
Abierto a nuevos desafíos y aprendizajes de nuevas tecnologías.

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
