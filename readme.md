# Slider

Slider is a component which you can use for your React application.

## Installation

Use the package manager:

### `npm install`

## Available Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

## Setting up the Slider

Sample data

```javascript
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
```

You must pass the data to the `props` of the `Carousel` component

```javascript
const App = () => {
  return (
    <div className="app">
      <Carousel data={data} />
    </div>
  );
};
```

Depending on the `data` you have to edit the `Slide` component

```javascript
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
```

## Visuals

![Slider](https://user-images.githubusercontent.com/76782175/115964688-5a7aad80-a52e-11eb-9eaa-89dfc2859437.gif)
