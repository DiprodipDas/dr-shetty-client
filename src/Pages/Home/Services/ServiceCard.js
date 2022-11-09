import React from 'react';

const ServiceCard = ({service}) => {

    const {img,price,title,description}=service;
    return (
        <div className="card card-compact w-45 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;