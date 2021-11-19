import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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

        <>
            <Typography variant="h4" style={{ fontFamily: 'cursive', paddingBottom: 8 }}>
                Manage All Products
            </Typography>
            <Typography variant="h6" style={{ fontFamily: 'cursive', paddingBottom: 8 }}>
                Total Products : {products.length}
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Index</StyledTableCell>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell align="left">{index + 1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <img style={{ width: '90px', height: '100px', border: '1px solid gray', borderRadius: '4px' }} src={product.image} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="left">{product.name}</StyledTableCell>
                                <StyledTableCell align="left">${product.price}</StyledTableCell>
                                <StyledTableCell align="left"><Button onClick={() => handleDelete(product._id)} style={{ backgroundColor: '#c62828', color: 'white' }}>Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    );
};

export default ManageProducts;