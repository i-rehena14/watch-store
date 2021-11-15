import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://nameless-depths-17324.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products);
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
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </div>
    );
};

export default ManageProducts;