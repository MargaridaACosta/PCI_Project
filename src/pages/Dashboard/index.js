import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
import './../../styles/pages.scss';
import OrderHistory from './../../components/OrderHistory';
import EditProfile from '../../components/EditProfile';
import Footer from '../../components/Footer'

const mapState = ({ user, ordersData }) => ({
    currentUser: user.currentUser,
    orderHistory: ordersData.orderHistory.data
});

const Dashboard = () => {
    const dispatch = useDispatch();
    const { currentUser, orderHistory } = useSelector(mapState);
    


    useEffect(() => {
        dispatch(getUserOrderHistory(currentUser.id))
    }, []);

    return (
        <>
            <div className="container m-auto">
        <h2 className="pt-24 pb-24 container m-auto">
                PERFIL</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1  lg:grid-cols-2">
             <div>
             <h3 className="container m-auto">
                EDITAR O PERFIL</h3>
            <EditProfile />
            </div>
            <div className="cotnainer m-auto mt-0 mb-56 md: mb-14">
                <h3 className="pb-14">ENCOMENDAS</h3>
            <OrderHistory orders={orderHistory} />
            </div>
        </div>
        
        </div>
        <Footer/>
        </>
    )
}

export default Dashboard;
