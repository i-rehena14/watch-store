import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { productId } = useParams();

    const [success, setSuccess] = useState(false);
    const [product, setProduct] = useState({});

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://nameless-depths-17324.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    //  console.log(product);
    const onSubmit = data => {
        data.email = user.email;
        data.status = "pending";

        fetch("https://nameless-depths-17324.herokuapp.com/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccess(true);
                    alert('Placed order successfully!!');
                }
            })
        console.log(data);
    };
    return (
        <div>
            <h3>Place Your Order</h3>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <h4>{product.rating}</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    defaultValue={product.name}
                />
                <br />
                <input
                    {...register("price", { required: true })}
                    defaultValue={product.price}
                    type="number" />
                <br />
                <input
                    {...register("address")}
                    placeholder="Address"
                />
                <br />
                <input
                    {...register("date", { required: true })}
                    placeholder="date"
                    type="date" />
                <br />

                <input {...register("image", { required: true })}
                    defaultValue={product.image} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit"
                    value="Place Order" />
            </form>
        </div>
    );
};

export default PlaceOrder;