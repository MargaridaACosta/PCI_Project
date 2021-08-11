import React from 'react';
import Header from './../components/Header'
import Footer from './../components/Footer'

const MainLayout = (props) => {
    return (
        <div>
            <Header {...props} />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout
