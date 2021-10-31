import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();

        axios.post('https://creepy-flesh-94489.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertId) {
                    alert('Service Added Successfully')

                }
            })
    }

    return (
        <div className="add-service">
            <h1>Add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place", { required: true, maxLength: 20 })} placeholder="Place" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("plan")} placeholder="Tour Plan" />

                <input type="number" {...register("cost")} placeholder="Price" />
                <input  {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default AddService;