import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Reviews = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    const [reviews,setReviews]=useState({});


    useEffect(()=>{
    fetch(`https://service-review-assignment-server-mu.vercel.app/reviews?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))
    },[user?.email])
    return (
        <div>
            <h2 className='text-5xl'>You have {reviews.length} Reviews</h2>
        </div>
    );
};

export default Reviews;