import Carousel from "./Carousel/Carousel";
 

const images = [
  "/image6.png",
  "/image9.png",
  "/image3.pmg",
];

function App() {
  return <Carousel images={images} intervalSeconds={3} />;
}

export default App;
