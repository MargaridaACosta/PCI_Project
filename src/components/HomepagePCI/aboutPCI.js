import React from 'react';
import PCISobre from '../../assets/img/PCISobre.png'



const AboutPCI = () => {
    return (
        <>
    <div className=" bg-black flex grid grid-col-1 md:grid-col-1 lg:grid-col-1 xl:grid-cols-2 2:grid-col-1 2x1:grid-col-2 relative align-middle">
            <div className="text-white text-left pr-24 self-center inline-block m-auto pl-8 lg:pl-8 md:pl-14 xl:pl-24 2xl:pl-60 pb-8 md:pb-8 lg:pb-0 xl:pb-0 2x1:pb-0">
            <h1 className=" text-left m-auto md:text-3x1 md:pt-8 sm:pt-14 xs:pt-14">SOBRE</h1>
                <p className=" md:pb-4 xs-pb-8 sm:pb-14 xl:pb-8">O PCI · Creative Science Park – Aveiro Region é o Parque de Ciência e Tecnologia da Região de Aveiro.
Projeto liderado pela Universidade de Aveiro em 2009, mobilizou os agentes da Região de Aveiro para a constituição de um espaço que promovesse a economia do conhecimento.
O PCI · Creative Science Park – Aveiro Region é membro efetivo da IASP – International Association of Science Parks and Areas of Innovation.


</p>
            </div>

            <div >
            <img src={ PCISobre } alt="DesignFactory" className="w-full"/>
            </div>
            
    </div>

        </>
    );
}

export default AboutPCI;