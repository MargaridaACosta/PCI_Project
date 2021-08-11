import React from 'react';



const FieldsCoopera = () => {
    return (
        <>
        <div className="bg-yellow align-middle m-auto pt-14 grid-cols-1 md:grid-cols-2" style={{height: '50vh'}}>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 align-middle pt-16 text-white">
            <div className="flex m-auto align-middle"><h5 className=" ">MAR</h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">FLORESTA</h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">SAÚDE </h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">TICE</h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">AGRO-ALIMENTAR</h5></div>
        </div>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4  pt-16 text-white">
            <div className="flex m-auto align-middle"><h5 className=" ">ENERGIA E <br></br>AMBIENTE</h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">ARTES<br></br> E  CULTURA</h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">TERRITÓTIROS,<br></br> DESENVOLVIMENTO <br></br> E HABITAT</h5></div>
            <div className="flex m-auto align-middle"><h5 className=" ">PRODUTOS E <br></br> PROCESSOS <br></br>INDUSTRIAIS</h5></div>
        </div>
        </div>
    </>
    );
}

export default FieldsCoopera;