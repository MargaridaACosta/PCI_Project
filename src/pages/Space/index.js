import React from 'react';
import SpacesResults from '../../components/SpacesResults'
import Footer from '../../components/Footer'

const Space = (props) => {
    return (
        <>
            <div className="container m-auto flex searchPage pt-24">
                <SpacesResults />
            </div>
            <Footer />
        </>
    )
}

export default Space;