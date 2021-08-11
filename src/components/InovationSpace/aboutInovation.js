import React from 'react';
import DFsobre from '../../assets/img/DFsobre.png';



const AboutInovation = () => {
    return (
        <>
    <div className=" bg-yellow flex grid grid-col-1 lg:grid-cols-2 align-middle ">
            <div className="text-white text-left pr-24 self-center inline-block m-auto pl-8 lg:pl-14s md:pl-14 xl:pl-24 2xl:pl-60 pb-8 md:pb-8 lg:pb-0 xl:pb-0 2x1:pb-0">
            <h1 className=" text-left m-auto">SOBRE</h1>
                <p>Criada em 1973, a Universidade de Aveiro foi pioneira a nível nacional na cooperação com o mundo empresarial. Ajuda a desenvolver competências para resolver problemas multidimensionais através de investigação multidisciplinar e da acesso facilitado aos Departamentos e nas Unidades de Investigação.</p>
            </div>

            <div >
            <img src={ DFsobre } alt="DesignFactory" className="w-full"/>
            </div>
            
    </div>

        </>
    );
}

export default AboutInovation;