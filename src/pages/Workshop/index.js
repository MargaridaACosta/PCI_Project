import React from 'react';
import WorkshopsResults from '../../components/WorkshopsResults'
import Footer from '../../components/Footer'

const Workshop = (props) => {
    return (
        <>
            <div className="container m-auto flex searchPage pt-24">
                <WorkshopsResults />
            </div>
            <Footer />
        </>
    )
}

export default Workshop;