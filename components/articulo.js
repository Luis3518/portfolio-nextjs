import React from "react";


function Articulo(props) {
  return (
    <a className="link" href={props.link} target="_blank">
      <div className="articuloContainer">
        <img src={props.img} />
        <div className="content">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
        <div className="hashtags">
          <p>{props.hashtags}</p>
        </div>
      </div>
    </a>
  );
}

export default Articulo;
