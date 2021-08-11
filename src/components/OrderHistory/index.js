import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '@material-ui/core';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const columns = [
    {
        id: 'orderCreatedDate',
        label: 'Data'
    },
    {
        id: 'documentID',
        label: 'ID Encomenda'
    },
    {
        id: 'typezão',
        label: 'Tipo'
    }
]

const styles = {
    fontSize: '16px',
    cursor: 'pointer',
    width: '10%'
};

const formatText = (columnName, columnValue) => {
    switch (columnName) {
        case 'orderCreatedDate':
            return moment(columnValue.nano).format('DD/MM/YYYY')
        default:
            return columnValue;
    }
};

const OrderHistory = ({ orders }) => {
    const history = useHistory();

    return (
        <TableContainer>
            <Table>

                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => {
                            const { label } = column;
                            return (
                                <TableCell
                                    key={index}
                                    style={styles}
                                >
                                    {label}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {(Array.isArray(orders) && orders.length > 0) && orders.map((row, index) => {
                        const { documentID } = row;

                        return (
                            <TableRow
                                key={index}
                                onClick={() => history.push(`/order/${documentID}`)}
                            >

                                {columns.map((column, index) => {
                                    const columnName = column.id;
                                    const columnValue = row[columnName];
                                    const formattedText = formatText(columnName, columnValue);

                                    return (
                                        <TableCell
                                            key={index}
                                            style={styles}
                                        >
                                            {formattedText}
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

export default OrderHistory;
