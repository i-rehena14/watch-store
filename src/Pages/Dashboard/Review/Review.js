import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Button, TextField } from '@mui/material';


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
            .then((data) => {
                if (data.insertedId) {
                    alert('Review added');
                }
            })
        console.log(data)
    };
    return (
        <div>
            <h2 style={{ color: 'lightslategrey', fontFamily: 'cursive' }}>Please, Give your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    {...register("name", { required: true })}
                    defaultValue={user.displayName}
                    sx={{ width: 300 }}
                /> <br /><br />

                <TextField
                    id="outlined-multiline-static"
                    label="Review"
                    {...register("review", { required: true })}

                    multiline
                    rows={3}
                    sx={{ width: 300 }}
                />
                <br />

                <br />
                <TextField
                    id="outlined-textarea"
                    label="Rate (1-5)"
                    {...register("rating")}
                    placeholder="Rating"
                    sx={{ width: 300 }}
                /> <br />
                <br />
                <br />
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    {...register("date", { required: true })}
                    placeholder="date"
                    sx={{ width: 300 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <Button type="submit"
                    variant="contained" >Submit</Button>
            </form>
        </div>
    );
};

export default Review;