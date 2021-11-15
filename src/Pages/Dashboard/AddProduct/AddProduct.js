import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("https://nameless-depths-17324.herokuapp.com/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
        console.log(data)
    };

    return (
        <div>
            <h1>Add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="Name" />
                <br />
                <input
                    {...register("price", { required: true })}
                    placeholder="price"
                    type="number" />
                <br />
                <input
                    {...register("rating")}
                    placeholder="Rating"
                />
                <br />
                <input
                    {...register("date", { required: true })}
                    placeholder="date"
                    type="date" />
                <br />
                <input
                    {...register("description", { required: true })}
                    placeholder="Description" />
                <br />

                <input {...register("image", { required: true })}
                    placeholder="Image Link" />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit"
                    value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;