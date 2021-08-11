import React, { useEffect } from 'react';
import {
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setOrderDetails } from './../../redux/Orders/orders.actions';




const columns = [
    {
        id: 'thumbnail',
        label: 'Imagem'
    },
    {
        id: 'nome',
        label: 'Nome'
    },
    {
        id: 'typezão',
        label: 'Tipo'
    },
    {
        id: 'quantity',
        label: 'Quantidade'
    },
]

const styles = {
    fontSize: '16px',
    width: '10%'
}

const formatText = (columnName, columnValue) => {
    switch (columnName) {
        case 'thumbnail':
            return <img src={columnValue} width={250} height={250}/>
        default:
            return columnValue;
    }
}

const OrderDetails = ({ order }) => {
    const orderItems = order && order.orderItems;
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(
                setOrderDetails({})
            );
        }

    }, [])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>

                        {columns.map((col, index) => {
                            return (
                                <TableCell 
                                    key={index}
                                    style={styles}
                                >
                                    {col.label}
                                </TableCell>
                            )
                        })}

                    </TableRow>
                </TableHead>
                <TableBody>

                    {(Array.isArray(orderItems) && orderItems.length > 0) && orderItems.map((row, index) => {
                        return (
                            <TableRow
                                key={index}
                            >
                                {columns.map((col, index) => {
                                    const columnName = col.id;
                                    const columnValue = row[columnName];

                                    return (
                                        <TableCell
                                            key={index}
                                            style={styles}
                                        >
                                            {formatText(columnName, columnValue)}
                                        </TableCell>
                                    )
                                })}

                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default OrderDetails;
