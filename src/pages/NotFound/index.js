import React from 'react';
import Bounce from 'react-reveal/Bounce';
import NotFoundIcon from '../../assets/icons/NotFound.png'

const NotFound = () => {
    return (
        <div className="container m-auto flex justify-center align-middle h-screen">
            <div className="m-auto">
                <h1>PÁGINA NÃO ENCONTRADA</h1>
                <Bounce><div><img src={NotFoundIcon} alt="NotFound" className="m-auto pt-14"/></div></Bounce>
            </div>
    </div>
    )
}

export default NotFound
