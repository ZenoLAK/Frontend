import React, { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/background1.png";
import backgroundImage2 from "../../assets/background2.jpg";
import backgroundImage3 from "../../assets/background3.jpg";
import "./background.scss";
import Navbar from "../Navbar/Navbar";

const BackgroundPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);

  const images = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage1,
  ];
  const [imageIndex, setImageIndex] = useState(0);

  const getNextImage = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
    setBackgroundImage(images[nextIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => getNextImage(), 5000);
    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <>
      <div className="top-nav">
        <Navbar />
      </div>
      <div
        className="background-page"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="welcome-text">
          <span>Welcome To TenTwenty Farms</span>
          <span> From our Farms to your hands</span>
        </div>
        <div className="next-box" onClick={getNextImage}>
          <img
            src={images[(imageIndex + 1) % images.length]}
            alt="Next Image"
          />
          <span className="next-text">Next</span>
          <div className="border" style={{ animationDuration: "5s" }}></div>
        </div>
      </div>
    </>
  );
};

export default BackgroundPage;
