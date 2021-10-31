import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../contexts/useAuth';
import './Details.css';
import axios from 'axios';

const Details = () => {
    const { serviceid } = useParams();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();


    const onSubmit = data => {
        console.log(data);
        reset();
        axios.post('http:///orders', data)
            .then(res => {
                if (res.data.insertId) {
                    alert('Service Added Successfully')

                }
            })
    }

    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://creepy-flesh-94489.herokuapp.com/services/${serviceid}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])



    return (
        <div >
            <h1> Details of {service.place} Tour</h1>
            <p  > {service.plan} </p>
            <h3> Cost: {service.cost} BDT</h3>
            <img style={{ width: "40%" }} src={service.img} alt="" />

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>


                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="Location" defaultValue={service.place} {...register("place")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <h5> Submit to Confirm your order...</h5>
                <input type="submit" />

            </form>


        </div>
    );
};

export default Details;