import  CarouselItem from "./CarouselItem"
import { useState } from "react";
export const Carousel=({images ,intervalSeconds=3})=>{
    const [selected,setSelected]=useState(1);
    const move=(number)=>{
        setSelected((prevSelected)=>(prevSelected+number+images.length)%images.length);
    };

    return(
        <>
        <div className="carousel-item">
        {images.map((src,index)=>(index==selected? <CarouselItem key={index} src={src}alt={`image ${index+1}`}/>:null))}
        </div> 
        <div>
        {images.map((src,index)=>(index==selected?<button className="active" key={index} onClick={()=>setSelected(index)}>{index+1}</button>:<button key={index} onClick={()=>setSelected(index)}>{index+1}</button>))}
        </div>
        <div>
        <button onClick={()=>move(-1)}>Previous</button>
        <button onClick={()=>move(1)}>Next</button>
        </div>
        </>
        
    )
}
export default Carousel