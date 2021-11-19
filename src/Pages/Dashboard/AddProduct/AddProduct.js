import { Alert, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';


const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [control, setControl] = useState(false);

    const onSubmit = data => {
        fetch("https://nameless-depths-17324.herokuapp.com/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    // alert("Added product Successfully");
                    setControl(true);
                }
            })
    };

    return (
        <div>
            <Typography variant="h4" sx={{ m: 5, fontFamily: 'cursive' }}>Add a Product</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    {...register("name", { required: true })}
                    sx={{ width: 300 }}
                />

                <br /><br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Price"
                    type="number"
                    {...register("price", { required: true })}
                    sx={{ width: 300 }}
                />

                <br /><br />
                <TextField
                    id="outlined-textarea"
                    label="Rate (1-5)"
                    {...register("rating")}
                    placeholder="Rating"
                    sx={{ width: 300 }}
                />

                <br /><br />
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

                <br /><br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    {...register("description", { required: true })}
                    sx={{ width: 300 }}
                />

                <br /><br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Image Link"
                    {...register("image", { required: true })}
                    sx={{ width: 300 }}
                /> <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <Button type="submit"
                    variant="contained" >ADD</Button>
            </form>
            {control && <Alert severity="success">Added Product SuccessFully!!</Alert>}
        </div>
    );
};

export default AddProduct;