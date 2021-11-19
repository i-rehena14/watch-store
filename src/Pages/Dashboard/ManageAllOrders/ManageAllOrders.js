import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
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

    const handleDelete = (id) => {
        const proceed = window.confirm("Do you really want to delete?");
        if (proceed) {
            fetch(`https://nameless-depths-17324.herokuapp.com/deleteOrder/${id}`, {
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

        <>
            <Typography variant="h4" style={{ fontFamily: 'cursive', paddingBottom: 8 }}>
                Total Orders: {orders.length}
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell align="left">{order.date}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {order.email}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <img style={{ width: '90px', height: '100px', border: '1px solid gray', borderRadius: '4px' }} src={order.image} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="left">{order.name}</StyledTableCell>
                                <StyledTableCell align="left">${order.price}</StyledTableCell>
                                <StyledTableCell align="left">
                                    Write "Shipped"
                                    <TextField
                                        onChange={handleStatus}
                                        defaultValue={order.status}
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Button onClick={() => handleUpdateStatus(order._id)} style={{ backgroundColor: '#01579b', color: 'white' }}>Update</Button>
                                    <Button onClick={() => handleDelete(order._id)} style={{ backgroundColor: '#c62828', color: 'white' }}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    );
};

export default ManageAllOrders;