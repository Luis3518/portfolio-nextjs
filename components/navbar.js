import React from "react";
import * as Scroll from "react-scroll";

function Navbar(props) {
  function handleClick(name) {
    Scroll.scroller.scrollTo(name, {
      duration: 500,
      delay: 50,
      smooth: true,
      offset: 0
    });
  }

  return (
    <nav>
      <ul>
        {props.samePage ? (
          <React.Fragment>
            <li onClick={() => handleClick("description")}>Sobre mi</li>
            <li onClick={() => handleClick("experience")}>Experiencia</li>
            <h2>LR</h2>
            <li onClick={() => handleClick("proyectos")}>Proyectos</li>
            <li onClick={() => handleClick("articulos")}>Articulos</li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a href="/">
              <li>Sobre mi</li>
            </a>
            <a href="/">
              <li onClick={() => handleClick("experience")}>Experiencia</li>
            </a>
            <h2>LR</h2>
            <a href="/">
              <li onClick={() => handleClick("articles")}>Proyectos</li>
            </a>
            <li onClick={() => handleClick("talks")}>articulos</li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
