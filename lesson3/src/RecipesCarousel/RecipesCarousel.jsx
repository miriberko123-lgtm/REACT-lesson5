import { useState,useEffect } from "react";
import axios from "../Carousel/config-axios";
import Carousel from "../Carousel/Carousel";
import "../Carousel.css";
export const RecipesCarousel=()=>{
const [images ,setImages]=useState([]);    
const[loading , setLoading]=useState(true);
const[error , setError]=useState(null);
  useEffect(() => {
     const controller = new AbortController();
    const goServer=async()=>{
        try{
            const response=await axios.get(`recipes?limit=6&select=name,image`, { signal: controller.signal });
            console.log(response.data.recipes);
            setImages(response.data.recipes.map((recipe) => recipe.image));
            setLoading(false);
        }
        catch(err){
            console.log(err);
            if (err.code === "ERR_CANCELED") return;
            setError("Failed to fetch recipes");
            setLoading(false);
        }
    };
    goServer();

       
        return () => {
         controller.abort();
        }
    }, [ ]);
return(
    <>
    {loading && <p className="carousel-message">Loading...</p>}
    {error && <p className="carousel-message error">{error}</p>}
    {!loading && !error && (
      <Carousel images={images} intervalSeconds={4} />
    )}
    </>
)

}
export default RecipesCarousel