import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]= useState([]);

    useEffect(()=>{
        fetch('https://service-review-assignment-server-mu.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
        <div>
            <div className='m-12'>
              <p  className='text-2xl font-bold text-center'>Services</p>
              <h3 className='text-5xl font-semibold text-center'>Our Services Area</h3>
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
           <Link to='/allservices'> <button className="btn btn-success text-center px-12">See all</button></Link>
            </div>
        </div>
    );
};

export default Services;