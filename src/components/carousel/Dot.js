import React from 'react';

// Import Style
import '../../style/carousel/_Dot.scss';

const Dot = props => {
  return (
    <button
      onClick={() => props.goToSlide(props.slide)}
      className={`dot ${props.status}`}
    ></button>
  );
};

export default Dot;
