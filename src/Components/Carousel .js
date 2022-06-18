import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import loadingImage from "../Images/Iphone-spinner-2.gif";
export const Carousel = ({ contentData, isLoading }) => {
  const [count, setCount] = useState(0);
  const carousel = useRef();

  const incrementCarousel = (delta) => {
    if (!carousel.current) return;
    const width = carousel.current.offsetWidth;
    if (count + delta > contentData.length - 1) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      setCount(contentData.length - 1);
      carousel.current.scrollTo(width * contentData.length - 1, 0);
      return;
    }

    carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
    setCount((c) => c + delta);
  };
  return (
    <>
      <div className="carousel-container">
        <div className="loading-data">
          {isLoading && <img alt="loading" src={loadingImage} />}
        </div>
        <div
          className="carousel-btn left-btn"
          onClick={() => incrementCarousel(-1)}
        />
        <div
          className="carousel-btn right-btn"
          onClick={() => incrementCarousel(1)}
        />

        <div className="carousel" ref={carousel}>
          {contentData.map((img, idx) => (
            <div className="carousel-item" key={`${idx}-${img.Title}`}>
              <img src={img.ImageUrl} alt="hero image" />
              <div className="carousel-text">
                <div>
                  <p className="text-title">{img.Title}</p>
                  <p className="text-sub">{img.Subtitle}</p>
                </div>
                <div>
                  <NavLink className="colums btn-nav" to="/contact-us">
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
