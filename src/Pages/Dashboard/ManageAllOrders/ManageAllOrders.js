import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://nameless-depths-17324.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleStatus = e => {
        setStatus(e.target.value);
    }
    // console.log(status);

    const handleUpdateStatus = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    const handleDelete = (id) => {
        const proceed = window.confirm("Do you really want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setControl(true);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
        // console.log(id);
    };

    return (

        <div >
            <h2 >All <span >Orders</span> : {orders?.length}</h2>
            <div >
                {orders.map(one =>
                    <div key={one._id}>
                        <div >
                            <h4 >{one.name}</h4>
                            <h5>Email: {one.email}</h5>
                            <h6>Date: {one.date}</h6>
                            <h5>${one.price}</h5>
                            Status : <input onChange={handleStatus} defaultValue={one.status} />(update to 'Shipped')
                            <button onClick={() => handleUpdateStatus(one._id)} >Update</button><br />
                            <button onClick={() => handleDelete(one._id)} >Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageAllOrders;