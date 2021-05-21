import React, { useState, useEffect, useRef, useMemo } from 'react';

// Import Components
import Dot from './Dot';

// Import IconComponents
import Next from '../../iconComponents/Next';
import Prev from '../../iconComponents/Prev';

// Import Style
import '../../style/carousel/_Carousel.scss';

// Move slides depending on their width
const carouselAnimation = (selectedSlide, index, swipe, slideWidth) => {
  return {
    transform: `translateX(${Math.round(
      slideWidth * (index - selectedSlide) + swipe
    )}px)`,
  };
};

const renderCarousel = (slides, selectedSlide, swipe, slideWidth) => {
  return slides.map((slide, i) => {
    return (
      <div
        key={i}
        className="slide"
        style={carouselAnimation(selectedSlide, i, swipe, slideWidth)}
      >
        {slide}
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
        status={i === selectedSlide ? 'dot_active' : ''}
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
      className="carousel__btn"
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
  const [mouseStatus, setMouseStatus] = useState(false);

  // Processing the slide width
  const slide = useRef({});
  const [slideWidth, setSlideWidth] = useState(1000);

  useEffect(() => {
    setSlideWidth(slide.current.clientWidth);
  }, []);

  const endOfAction = () => {
    if (startCor.corX > endCor.corX && endCor.corX - startCor.corX < -50)
      setSelectedSlide(selectedSlide + 1);

    if (startCor.corX < endCor.corX && endCor.corX - startCor.corX > 50)
      setSelectedSlide(selectedSlide - 1);

    setSwipe(0);
  };

  if (selectedSlide === props.children.length) setSelectedSlide(0);
  if (selectedSlide < 0) setSelectedSlide(props.children.length - 1);

  window.addEventListener('resize', () =>
    setSlideWidth(slide.current.clientWidth)
  );

  return (
    <div className="carousel">
      <div className="carousel__container">
        {renderButtons('prev', selectedSlide, setSelectedSlide)}
        <div
          ref={slide}
          // Settings for desktop swipe
          onMouseDown={e => {
            setMouseStatus(true);
            setStartCor({
              corX: e.clientX,
              corY: e.clientY,
            });
          }}
          onMouseMove={e => {
            if (mouseStatus) {
              setSwipe(e.clientX - startCor.corX);
              setEndCor({
                corX: e.clientX,
                corY: e.clientY,
              });
            }
          }}
          onMouseUp={() => {
            setMouseStatus(false);
            endOfAction();
          }}
          onMouseLeave={e => {
            setSwipe(0);
            setMouseStatus(false);
          }}
          // Settings for mobile swipe
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
            endOfAction();
          }}
          className="carousel__content"
        >
          {renderCarousel(props.children, selectedSlide, swipe, slideWidth)}
        </div>
        {renderButtons('next', selectedSlide, setSelectedSlide)}
      </div>
      <div className="carousel__dots">
        {useMemo(
          () =>
            renderDots(props.children.length, selectedSlide, setSelectedSlide),
          [selectedSlide]
        )}
      </div>
    </div>
  );
};

export default Carousel;
