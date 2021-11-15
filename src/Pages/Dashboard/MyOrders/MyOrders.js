import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();
    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email, control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cancelOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    setControl(!control);
                }
            });
        // console.log(id);
    };

    return (
        <div>
            <h3>My Orders</h3>
            <h5> orders:{orders.length}</h5>
            <h6>Email:{user.email}</h6>
            {orders.map(order => (
                <div>
                    <img src={order.image} alt="" />
                    <h4>{order.name}</h4>
                    <h5>${order.price}</h5>
                    <button onClick={() => handleDelete(order._id)}>Cancel</button>
                </div>
            ))}
        </div>
    );
};

export default MyOrders;