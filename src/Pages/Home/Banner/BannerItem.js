import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const{image,prev,id,next}=slide;
    console.log(id)
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} className="w-full rounded-lg" alt='' />
        </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4 ">
           <h1 className='text-6xl font-bold text-white'>
             Welcome to <br />
             Shetty's Chamber 
     
           </h1>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 w-2/4 left-24 right-5 top-1/2 ">
           <p className='text-white text-xl'>Dr. Devi Prasad Shetty is the Chairman of Narayana Health, and also an Executive Director. He is a cardiac surgeon with around 34 years of experience. </p>
         </div>
         <div className="absolute flex transform -translate-y-1/2 w-2/4 left-24 right-5 top-3/4 ">
         <button className="btn btn-success mr-5">HelpLine</button>
         <button className="btn btn-outline btn-success">About Us</button>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
           <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
       </div> 
    );
};

export default BannerItem;