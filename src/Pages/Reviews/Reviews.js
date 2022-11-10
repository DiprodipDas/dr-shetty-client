import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

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
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service Name</th>
        <th>Email</th>
        <th>Review Massege</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            reviews.map(review=><ReviewRow
            key={review._id}
            review={review}
            ></ReviewRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Reviews;