import React from 'react';
import InovationLanding from '../../assets/img/inova.png';
import Footer from '../../components/Footer';
import AboutInovation from '../../components/InovationSpace/aboutInovation.js';
import CooperaInovation from '../../components/InovationSpace/cooper1.js';
import FieldsCoopera from '../../components/InovationSpace/cooper2.js';
import CooperMore from '../../components/InovationSpace/coopera3.js';
import ButtonsInova from '../../components/Button/buttonsInova.js';

const InovationSpace = () => {
    return (
        <>
        <img src={ InovationLanding } alt="sala" className="h-full w-full"/>
        <div className="container mx-auto flex-grow ">
        </div>
        <div className="container mx-auto flex-grow ">
        <ButtonsInova/>
        </div>
            <AboutInovation />
            <CooperaInovation />
            <FieldsCoopera />
            <CooperMore />
             <Footer className=" mt-96 md:mt-24 lg:mt-24 xl:mt-24"/>
             </>
    )
}

export default InovationSpace
