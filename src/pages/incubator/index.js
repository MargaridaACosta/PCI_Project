import React from 'react';
import IncubatorLanding from '../../assets/img/incubadora.png';
import Footer from '../../components/Footer/index.js';
import AboutIncubator from '../../components/IncubatorLandingPage/aboutIncubator.js'
import MissionIncubator from '../../components/IncubatorLandingPage/missionIncubator';
import DimentionIncubator from '../../components/IncubatorLandingPage/dimentionIncubator.js';
import ProgramsIncubator from '../../components/IncubatorLandingPage/programsIncubator.js';
import ButtonsIcubator from '../../components/Button/buttonsIncubator.js';


const Incubator = () => {
    return (
        <>
        <img src={IncubatorLanding} alt="sala" className="h-full w-full"/>
        <div className="container mx-auto flex-grow ">
                <ButtonsIcubator/>
        </div>
            <AboutIncubator />
            <MissionIncubator />
            <ProgramsIncubator />
            <DimentionIncubator />
            <Footer className=" mt-96 md:mt-24 lg:mt-24 xl:mt-24"/>
             </>
    )
}

export default Incubator
