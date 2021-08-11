import React from 'react';
import DFsobre from '../../../assets/img/DFsobre.png'



const AboutDF = () => {
    return (
        <>
    <div className=" bg-red flex grid grid-col-1 lg:grid-cols-2 align-middle ">
            <div className="text-white text-left pr-24 self-center inline-block m-auto pl-8 lg:pl-14s md:pl-14 xl:pl-24 2xl:pl-60 pb-8 md:pb-8 lg:pb-0 xl:pb-0 2x1:pb-0">
            <h1 className=" text-left m-auto">SOBRE</h1>
                <p>Espaço de colaboração e partilha de conhecimento para desenvolvimento e materialização de produtos e serviços inovadores liderados pelo Design, promovendo e facilitando a implementação e exploração de práticas metodológicas, ferramentas e processos de design participado e colaborativo.</p>
            </div>

            <div >
            <img src={ DFsobre } alt="DesignFactory" className="w-full"/>
            </div>
            
    </div>

        </>
    );
}

export default AboutDF;
















/*
const AboutDF = () => {
    return (
        <>
    <div className=" bg-red flex grid grid-col-1 lg:grid-cols-3">
            <div className="">
                <h1 className="text-white text-left">SOBRE</h1>
                <p className="text-left">Espaço de colaboração e partilha de conhecimento para desenvolvimento e materialização de produtos e serviços inovadores liderados pelo Design, promovendo e facilitando a implementação e exploração de práticas metodológicas, ferramentas e processos de design participado e colaborativo.</p>
            </div>

            <div>
                <img src={ DFsobre } alt="DesignFactory" className="object-fill"/>
            </div>
            
    </div>

        </>
    );
}

export default AboutDF;*/