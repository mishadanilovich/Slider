import React from 'react';

// Import Components
import Carousel from './carousel/Carousel';

// Import Style
import '../style/App.scss';

// Test data
const data = [
  {
    id: 1,
    title: 'Beautiful View',
    description: 'Take a photo!',
    imgSrc:
      'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
  },
  {
    id: 2,
    title: 'Cat',
    description: 'Red cat!',
    imgSrc:
      'https://i.pinimg.com/originals/9d/eb/f8/9debf873800cadf6f7765f75929a303b.jpg',
  },
  {
    id: 3,
    title: 'Dog',
    description: 'Friendly dog!',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkabCx5rqgLs4noZKCrL2MAvB-LZdSF5Mo1g&usqp=CAU',
  },
];

const App = () => {
  return (
    <div className="app">
      <Carousel data={data} />
    </div>
  );
};

export default App;
