import React from 'react';



const Focus = () => {
    return (
        <>
        <div className="bg-black align-middle m-auto pt-36 pb-36" style={{height: '50%'}}>
                <h1 className="text-white">ÁREAS DE APOSTA <br></br>ESTRATÉGICA</h1>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 align-middle pt-16">
            <div className="w-20 flex m-auto align-middle"><h5 className=" text-white">AGROINDUSTRIAL</h5></div>
            <div className="w-20 flex m-auto align-middle"><h5 className=" text-white">ENERGIA</h5></div>
            <div className="w-20 flex m-auto align-middle"><h5 className=" text-white">MATERIAIS</h5></div>
            <div className="w-20 flex m-auto align-middle"><h5 className=" text-white">TICE</h5></div>
            <div className="w-20 flex m-auto align-middle"><h5 className=" text-white">MAR</h5></div>
        </div>
        </div>
    </>
    );
}

export default Focus;



