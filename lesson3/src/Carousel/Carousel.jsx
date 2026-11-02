import  CarouselItem from "./CarouselItem"
import { useState } from "react";
export const Carousel=({images ,intervalSeconds=3})=>{
    const [selected,setSelected]=useState(1);


    return(
        
        <>
        {images.map((src,index)=>(index==selected? <CarouselItem key={index} src={src}alt={`image ${index+1}`}/>:null))}
        </>
        
    )
}
export default Carousel