import "./MovieList.css";
import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { myVarContext } from "../App";

function MovieList() {
  const { filteredData } = useContext(myVarContext);
  return (
    <div className="MovieList">
      {filteredData.toReversed().map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <MovieCard key={movie.id} {...movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
