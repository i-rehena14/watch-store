import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (data.insertedId) {
                    alert('Review added');
                }
            })
        console.log(data)
    };
    return (
        <div>
            <h1>Give your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    defaultValue={user.displayName} />
                <br />
                <input
                    {...register("review", { required: true })}
                    placeholder="review" />
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
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit"
                    value="Submit" />
            </form>
        </div>
    );
};

export default Review;