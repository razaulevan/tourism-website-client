import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://creepy-flesh-94489.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="mt-3 mx-auto py-2">
            <h1 className="py-3"> Which Place You Want to Visit??</h1>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services mb-5">
                {

                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Services;