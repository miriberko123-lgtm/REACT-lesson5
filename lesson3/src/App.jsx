import Carousel from "./Carousel/Carousel"; 
import RecipesCarousel from "./RecipesCarousel/RecipesCarousel";

const images = [
  "/image6.png",
  "/image9.png",
  "/image3.png",
];

function App() {
  return (
  <>
  <Carousel images={images} intervalSeconds={3} />
  <RecipesCarousel />
  </>
  );

}

export default App;
