import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {_id,title,img,description,price} = useLoaderData();
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img alt='' src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <p><small>Price: ${price}</small></p>
           <Link to={`/addreview/${_id}`}> <button className="btn btn-success mt-5">Add Review</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;