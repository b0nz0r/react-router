import React from "react";
import "./MovieCard.css";

function MovieCard({ imgURL, title, rating, release, description }) {
  return (
    <div className="MovieCard">
      <div className="card">
        <div className="imgWrapper">
          <img src={imgURL} alt="Movie Poster" width={"100%"} />
          <div className="releaseDate">
            <p>Release Date: {release}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="cardBody">
          <abbr title={title}>
            <h2>{title}</h2>
          </abbr>
          <p>
            <img
              src="https://icon-library.com/images/ratings-icon/ratings-icon-5.jpg"
              alt="imdb icon"
              width={20}
            />
            Rating: {rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}
MovieCard.defaultProps = {
  imgURL:
    "https://americandurafilm.com/wp-content/uploads/2022/06/No-Image-Placeholder.png",
  title: "Unavailable title",
  genres: "Unavailable",
  release: "Unavailable",
  description: "Unavailable description",
};
export default MovieCard;
