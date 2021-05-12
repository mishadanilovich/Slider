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

### Sample data

To add your data to a slide, you must pass it between open and close tags of the `React.Fragment` component. You can add any kind of HTML content.

```javascript
<Slide>
  <h1>Beautiful View</h1>
  <img
    src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
    alt="View"
  />
</Slide>
```

To add a new slide, you must add `React.Fragment` component between open and close tags of the `Carousel` component. And you can add any number of `React.Fragment` components.

```javascript
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
```

## Visuals

![Carousel](https://user-images.githubusercontent.com/76782175/116260353-47125100-a77f-11eb-8626-aa51f11991e0.gif)
