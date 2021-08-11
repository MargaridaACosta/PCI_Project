import React from 'react';
import TV from '../../../assets/icons/tv.png'


const GeneralInfo = () => {
    return (
        <>
            <div className="grid flex gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

                <div className="grid flex gap-4 grid-cols-1">

                    <div className="grid flex gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-7 h-20 flex-shrink-0">
                        <div className="w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${TV})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>
                        <div className="ml-4 md:ml-14 lg:ml-8 col-span-3 md:col-span-5 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">texto</h5></div>
                    </div>
                </div>


                <div>
                    <p>A Sala de Reuniões encontra-se no primeiro andar do edificio 1 do PCI - Creative Science Park. Dispoõe de um espaço  amplo, preechido com mobilia de alta qualidade fornecida pelas empresas exclusivamente portuguesas.
                    O espaço é muito flexível, dando a possibilidade aos utilizadores configurar o espaço da forma que melhor se adapte ao seu evento.</p>
                </div>
            </div>
        </>
    );
}

export default GeneralInfo;




/*const GeneralInfo = ({ id, icon, text, description }) => {
    return (
        <>
        <div className="grid flex gap-4 grid-cols-2">
                <div>
                    <div className="flex mb-5">
                    <div className="grid flex gap-4 grid-cols-6 h-20 ">
                        <div className="bg-red rounded-lg w-20 justify-center flex"><img src={ icon } alt="tv" className="self-center inline-block m-auto"/></div>
                        <div className="col-span-5 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">{ text }</h5></div>
                    </div>
                    </div>
                </div>
                <div>
                    <p>{ description }</p>
                </div>
        </div>
        </>
    );




}

export default GeneralInfo;*/