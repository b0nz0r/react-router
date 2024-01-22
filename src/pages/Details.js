import React, { useContext } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { myVarContext } from "../App";

function Details() {
  const { myData } = useContext(myVarContext);
  const { id } = useParams();
  const cardData = myData.find((movie) => movie.id == id);
  return (
    <div className="Details">
      <h1>{cardData.title}</h1>
      <hr />
      <iframe
        width="560"
        height="415"
        src={cardData.trailerURL}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{cardData.description}</p>
      <div className="backHome">
        <Link to="/">
          <h6 id="backHome">&#x2190; Home</h6>
        </Link>
      </div>
    </div>
  );
}

export default Details;
