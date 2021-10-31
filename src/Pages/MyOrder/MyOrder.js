
import React, { useEffect, useState } from 'react';

import useAuth from '../../contexts/useAuth';

const MyOrder = () => {

    const { user } = useAuth();

    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(`https://creepy-flesh-94489.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrder(data));

    }, [])

    return (
        <div>
            <h1> Your Order </h1>
            <p> {order[0]?.name}</p>
            <p>Place you love to visit: {order[0]?.place}</p>
            <p>Email: {order[0]?.email}</p>
            <p>Mobile: {order[0]?.phone}</p>
        </div >
    );
}

export default MyOrder;