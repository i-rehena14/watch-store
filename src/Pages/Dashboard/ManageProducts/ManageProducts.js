import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://nameless-depths-17324.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Do you really want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(order => order._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
        // console.log(id);
    };

    return (
        <div>
            <h3>Manage All Products</h3>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {products.map((product, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <img style={{ width: '100px', height: '100px' }} src={product.image} alt="" />
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </div>
    );
};

export default ManageProducts;