import React from 'react';
import EquipmentsResults from '../../components/EquipmentsResults'
import Footer from '../../components/Footer'

const Equipment = (props) => {
    return (
        <>
        <div className="container m-auto flex searchPage pt-24">
            <EquipmentsResults />
        </div>
            <Footer />
        </>
    )
}

export default Equipment;
