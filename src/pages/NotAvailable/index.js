import React from 'react';
import NotAvailableLogo from '../../assets/icons/notAvailable.png'
import Footer from '../../components/Footer'
import Bounce from 'react-reveal/Bounce'


const NotAvailable = () => {
    return (
        <>
    <div className="container m-auto flex justify-center align-middle h-screen">
            <div className="m-auto">
                <h1>Em construção</h1>
                <Bounce><div><img src={NotAvailableLogo} alt="NotAvailableLogo" className="m-auto pt-14"/></div></Bounce>
            </div>
    </div>
    <Footer />
        </>
    );
}

export default NotAvailable;