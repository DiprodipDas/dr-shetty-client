import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddReview = () => {
    const {_id,title}= useLoaderData();
    const {user}= useContext(AuthContext);

    const handleReview=event=>{
        event.preventDefault();
        const form= event.target;
        const name=`${form.firstName.value} ${form.lastName.value}`;
        const email= user?.email || 'unregistered';
        const phone=form.phone.value;
        const reviewMessage=form.review.value;


        const review = {
         service: _id,
         serviceName: title,
         reviewer: name,
         email,
         phone,
         reviewMessage
        }
        
      fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert('Review submited successfully');
            form.reset();
          
        }
    })
      .catch(err=>console.error(err));

    }
    return (
        <div>
           <form onSubmit={handleReview}>
            <h2 className='text-4xl text-center'>{title}</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5'>
           <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
           <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
           <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
           <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
           </div>
           <textarea name='review' className="textarea textarea-bordered h-24 w-full mb-5" placeholder="Write your review..."required></textarea>
           <button className='btn btn-success mb-5'><input type="submit" value="Submit Your Review" /></button>
           </form>
        </div>
    );
};

export default AddReview;