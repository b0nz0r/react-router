import "./App.css";
import React, { useState, createContext } from "react";
import { myObject } from "./myData";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

export const myVarContext = createContext();

function App() {
  // State variables to manage user input and component visibility
  const [searchedTitle, setSearchedTitle] = useState("");
  const [searchedRating, setSearchedRating] = useState(0);
  // State variable to manage movie data
  const [myData, setMyData] = useState(myObject);
  // State variable to manage new movie data
  const [newData, setNewData] = useState({});

  // Handler for getting input values to filter movies based on title and rating
  const handlefilter = (title, rating) => {
    setSearchedTitle(title);
    setSearchedRating(rating);
  };

  // Array containing movies filtered by title and rating
  const filteredData = myData.filter((movie) => {
    const titleMatch = searchedTitle
      ? movie.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase())
      : true;
    const ratingMatch = searchedRating
      ? Math.floor(movie.rating) == searchedRating
      : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="App">
      <myVarContext.Provider
        value={{
          myData,
          setMyData,
          newData,
          setNewData,
          handlefilter,
          filteredData,
        }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <>
                  <SearchBar />
                  <MovieList />
                </>
              }
            />
            <Route path="details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </myVarContext.Provider>
    </div>
  );
}

export default App;
