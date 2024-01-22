import React, {useState, useContext} from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewMovieForm from '../components/NewMovieForm';
import AppFooter from '../components/AppFooter';
import { myVarContext } from "../App";

function MainLayout() {
    const { myData, setMyData, newData, setNewData } = useContext(myVarContext);
  const [show, setShow] = useState(false);


  // Handler for adding new movie data to the existing list
  const additionHandler = (newData) => {
    setMyData([
      ...myData,
      {
        id: myData.length ,
        ...newData,
      },
    ]);
    setNewData({});
    toggleShow();
  };

  // Function to toggle the visibility of the NewMovieForm component
  const toggleShow = () => setShow(!show);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach the click event directly in the component
  window.onscroll = () => {
    // Show the button when scrolling down, hide it when at the top
    const isVisible = window.scrollY > 300;
    document.getElementById("scroll-to-top").style.display = isVisible
      ? "block"
      : "none";
  };

  return (
    <div>
      <Navbar toggleShow={toggleShow} />
      {show && (
        <NewMovieForm
          toggleShow={toggleShow}
          additionHandler={additionHandler}
          newData={newData}
          setNewData={setNewData}
        />
      )}
      <Outlet />
      <button id="scroll-to-top" onClick={scrollToTop}>
        Top
      </button>
      <AppFooter />
    </div>
  );
}

export default MainLayout