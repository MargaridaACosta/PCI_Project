import React from 'react';
import Button from '../Button/button_next.js';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import DF from '../../assets/img/DF.png';
import ButtonsDF from '../Button/buttonsDF.js';



const DesignFactory = () => {
    return (
        <>
            <img src={DF} alt="sala" className="h-full w-full" />
            <div className="container mx-auto flex-grow ">
                <ButtonsDF className="" />
                <Link to="/Spaces">
                    <Button />
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default DesignFactory