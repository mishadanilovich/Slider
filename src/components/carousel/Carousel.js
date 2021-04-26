import React, { useState } from 'react';

// Import Components
import Slide from './Slide';
import Dot from './Dot';

// Import IconComponents
import Next from '../../iconComponents/Next';
import Prev from '../../iconComponents/Prev';

// Import Style
import '../../style/carousel/Carousel.scss';

const carouselAnimation = (selectedSlide, index, swipe) => {
  return {
    transform: `translateX(${105 * (index - selectedSlide) + swipe / 10}%)`,
  };
};

const renderCarousel = (slides, selectedSlide, swipe) => {
  return slides.map((slide, i) => {
    return (
      <div
        key={i}
        className={`slide slide--${i}`}
        style={carouselAnimation(selectedSlide, i, swipe)}
      >
        <Slide slide={slide} />
      </div>
    );
  });
};

const renderDots = (count, selectedSlide, setSelectedSlide) => {
  const dots = [];

  const goToSlide = slide => {
    setSelectedSlide(slide);
  };

  for (let i = 0; i < count; i++) {
    const dot = (
      <Dot
        goToSlide={goToSlide}
        key={i}
        slide={i}
        status={i === selectedSlide ? 'active' : ''}
      />
    );

    dots.push(dot);
  }

  return dots;
};

const renderButtons = (action, selectedSlide, setSelectedSlide) => {
  return (
    <button
      onClick={() =>
        action === 'next'
          ? setSelectedSlide(selectedSlide + 1)
          : setSelectedSlide(selectedSlide - 1)
      }
      className="btn"
    >
      {action === 'next' ? <Next /> : <Prev />}
    </button>
  );
};

const Carousel = props => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [startCor, setStartCor] = useState({ corX: 0, corY: 0 });
  const [endCor, setEndCor] = useState({ corX: 0, corY: 0 });
  const [swipe, setSwipe] = useState(0);

  if (selectedSlide === props.data.length) setSelectedSlide(0);
  if (selectedSlide < 0) setSelectedSlide(props.data.length - 1);

  return (
    <div className="carousel">
      <div className="carousel__container">
        {renderButtons('prev', selectedSlide, setSelectedSlide, props.data)}
        <div
          onTouchStart={e => {
            setStartCor({
              corX: e.touches[0].clientX,
              corY: e.touches[0].clientY,
            });
          }}
          onTouchMove={e => {
            setSwipe(e.touches[0].clientX - startCor.corX);
            setEndCor({
              corX: e.touches[0].clientX,
              corY: e.touches[0].clientY,
            });
          }}
          onTouchEnd={() => {
            if (
              startCor.corX > endCor.corX &&
              endCor.corX - startCor.corX < -150
            )
              setSelectedSlide(selectedSlide + 1);

            if (
              startCor.corX < endCor.corX &&
              endCor.corX - startCor.corX > 150
            )
              setSelectedSlide(selectedSlide - 1);

            setSwipe(0);
          }}
          className="carousel__container__content"
        >
          {renderCarousel(props.data, selectedSlide, swipe)}
        </div>
        {renderButtons('next', selectedSlide, setSelectedSlide)}
      </div>
      <div className="carousel__dots">
        {renderDots(props.data.length, selectedSlide, setSelectedSlide)}
      </div>
    </div>
  );
};

export default Carousel;
