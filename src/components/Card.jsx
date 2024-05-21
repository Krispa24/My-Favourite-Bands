import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        Origin: <Detail detailInfo={props.origin} />
        Formed in: <Detail detailInfo={props.formedIn} />
      </div>
    </div>
  );
}

export default Card;
