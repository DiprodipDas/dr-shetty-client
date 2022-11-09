import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]= useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
        <div>
            <div>
              <p  className='text-2xl font-bold text-center'>Services</p>
              <h3 className='text-5xl font-semibold text-center'>Our Services Area</h3>
              <p className='text-center'>Something something doing doing</p>
            </div>
            <div className='grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                  services.map(service=> <ServiceCard
                  key={service._id}
                  service={service}
                  ></ServiceCard>)
                }
            </div>
            <div className='text-center m-5'>
            <button className="btn btn-success text-center">See all</button>
            </div>
        </div>
    );
};

export default Services;