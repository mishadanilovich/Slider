import React from 'react';

// Import Components
import Carousel from './carousel/Carousel';

// Import Style
import '../style/_App.scss';

const App = () => {
  return (
    <div className="app">
      <Carousel>
        <>
          <h1>Beautiful View</h1>
          <img
            src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
            alt="View"
          />
        </>
        <>
          <h1>Dog</h1>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            alt="Dog"
          />
        </>
      </Carousel>
    </div>
  );
};

export default App;
