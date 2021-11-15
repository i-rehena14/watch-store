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
        fetch(`https://nameless-depths-17324.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    const handleDelete = (id, email) => {
        fetch(`https://nameless-depths-17324.herokuapp.com/deleteOrder?id=${id}&email=${email}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                // if (data.deleteCount) {
                //     setControl(!control);
                // }
                console.log(data);
            });

        // console.log(id, email);
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
                            <h5>${one.price}</h5>
                            Status : <input onChange={handleStatus} defaultValue={one.status} />(update to 'Shipped')
                            <button onClick={() => handleUpdateStatus(one._id)} >Update</button><br />
                            <button onClick={() => handleDelete(one._id, one.email)} >Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageAllOrders;