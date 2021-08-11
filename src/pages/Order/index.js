import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderDetailsStart } from './../../redux/Orders/orders.actions';
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from './../../components/OrderDetails';

const mapState = ({ ordersData }) => ({
    orderDetails: ordersData.orderDetails
});

const Order = () => {
    const { orderID } = useParams();
    const dispatch = useDispatch();
    const { orderDetails } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            getOrderDetailsStart(orderID)
        );

    }, [])

    return (
        <div className="container m-auto pt-24 ">
            <h1 className="pb-24">
                Order ID: #{orderID}
            </h1>

            <OrderDetails order={orderDetails} />
        </div>
    );

}

export default Order
