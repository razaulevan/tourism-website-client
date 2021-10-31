import React from 'react';

const Order = ({ allorder }) => {
    const { place, name } = allorder;
    return (
        <div>

            <h5> Name: {allorder.name} </h5>
            <p>Place: {allorder.place}</p>

        </div>
    );
};

export default Order;