import React from 'react';
import { useEffect, useState } from 'react';
import Order from '../Order/Order';


const AllOrder = () => {
    const [allorders, setAllorders] = useState([])
    useEffect(() => {
        fetch('https://creepy-flesh-94489.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data));
    }, [])
    return (
        <div>
            <h3>All Orders</h3>
            {

                allorders.map(allorder => <Order
                    key={allorder._id}
                    allorder={allorder}
                ></Order>)
            }

        </div>
    );
};

export default AllOrder;