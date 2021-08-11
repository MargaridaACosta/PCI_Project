import React from 'react';
import Footer from '../../components/Footer';
import DF from '../../assets/img/DF.png';
import ButtonsDF from '../../components/Button/buttonsDF.js';
import MissionDF from '../../components/DesignFactory/LandingPage/mission.js';
import AboutDF from '../../components/DesignFactory/LandingPage/about.js';
import PeopleDimentionDF from '../../components/DesignFactory/LandingPage/peopleDimension.js';
import ProgramsDF from '../../components/DesignFactory/LandingPage/programsDF.js';



const DesignFactory = () => {
    return (
        <>
        <img src={DF} alt="sala" className="h-auto w-full md:w-full xl:w-full lg:w-full md:h-full xl:h-full lg:h-full"/>
        <div className="container mx-auto flex-grow ">
            <ButtonsDF className=""/>
        </div>
            <AboutDF />
            <MissionDF />
            <ProgramsDF />
            <PeopleDimentionDF />
             <Footer className=" mt-96 md:mt-24 lg:mt-24 xl:mt-24"/>
             </>
    )
}

export default DesignFactory