import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id,img,price,title,description}=service;
    return (
        <div className="card card-compact w-45 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                {
                    description.length >100 ?
                    <p>{description.slice(0, 150) + '....'}</p>
                    :
                    {description}
                }
                <p>price: ${price}</p>
                <div className="card-actions justify-end">
                <Link to={`service/${_id}`}>
                <button className="btn btn-success">See Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;