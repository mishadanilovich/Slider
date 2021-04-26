import React from 'react';

// Import Style
import '../../style/carousel/Slide.scss';

const Slide = ({ slide }) => {
  return (
    <>
      <h2 className="slide__title">{slide.title}</h2>
      <p className="slide__description">{slide.description}</p>
      <div className="slide__img">
        <img src={slide.imgSrc} alt={slide.title} className="img"></img>
      </div>
    </>
  );
};

export default Slide;
