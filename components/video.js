import React from "react";


function Video(props) {
  return (
    <a className="link" href={props.link} target="_blank">
      <div className="articleContainer">
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

export default Video;
