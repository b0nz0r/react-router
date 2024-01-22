import React, { useState, useContext } from "react";
import "./SearchBar.css";
import { myVarContext } from "../App";

function SearchBar() {
  const { handlefilter } = useContext(myVarContext);
  // State variables to manage user input for title and rating
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  // Handler for changes in the movie title input
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    handlefilter(event.target.value, rating);
  };

  // Handler for changes in the movie rating select input
  const handleRatingChange = (event) => {
    setRating(event.target.value);
    handlefilter(title, event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        id="movie-title"
        name="movie-title"
        placeholder="Search by title..."
        onChange={handleTitleChange}
      />
      <select
        id="movie-rating"
        name="movie-rating"
        onChange={handleRatingChange}
      >
        <option value="">Select by rating...</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
