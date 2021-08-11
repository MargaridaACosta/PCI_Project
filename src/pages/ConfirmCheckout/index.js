import React from 'react'
import ConfirmCheckoutDetails from './../../components/ConfirmCheckoutDetails'
import Footer from '../../components/Footer'

import './../../styles/components/confirm_checkout.scss'

const ConfirmCheckout = () => {
    return (
        <>
        <div>
            <ConfirmCheckoutDetails />
        </div>
        < Footer />
        </>
    )
}

export default ConfirmCheckout