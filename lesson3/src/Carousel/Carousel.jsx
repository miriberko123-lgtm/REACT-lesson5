import  CarouselItem from "./CarouselItem"
import { useState,useEffect } from "react";
import "../Carousel.css";

export const Carousel=({images ,intervalSeconds=3})=>{
    const [selected,setSelected]=useState(1);
    const move=(number)=>{
        setSelected((prevSelected)=>(prevSelected+number+images.length)%images.length);
    };
  useEffect(() => {
        const id = setInterval(() => {
        console.log("interval");
            setSelected(prevSelected =>( prevSelected + 1)% images.length);
        }, intervalSeconds * 1000);
        return () => {
            console.log("clear interval");
            clearInterval(id);
        }
    }, [selected,intervalSeconds ]);
    return(
        <>
            <div className="carousel">
        <div className="carousel-item">
        {images.map((src,index)=>(index==selected? <CarouselItem key={index} src={src}alt={`image ${index+1}`}/>:null))}
        </div> 
        <div className="carousel-dots">
        {images.map((src,index)=>(index==selected?<button className="carousel-dot active" key={index} onClick={()=>setSelected(index)}>{index+1}</button>:<button className="carousel-dot" key={index} onClick={()=>setSelected(index)}>{index+1}</button>))}
        </div>
        <div>
        <button className="carousel-arrow prev" onClick={()=>move(-1)}>Previous</button>
        <button className="carousel-arrow next" onClick={()=>move(1)}>Next</button>
        </div>
     </div>
        </>
        
    )
}
export default Carousel