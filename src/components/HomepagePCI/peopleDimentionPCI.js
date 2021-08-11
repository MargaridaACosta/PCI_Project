import React from 'react';



const DimentionPCI = () => {
    return (
        <>
       <div class=" align-middle flex pt-14 pb-14 " style={{height: '100%'}}>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center align-middle pl-14 md:pl-14 lg:pl-24 xl:pl-72 pt-36 pb-36 pb-8" style={{height: '100%'}}>
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-black">385</h2></div>
            <div className="col-span-5 justify-right flex pl-16"><h5 className="self-end inline-block overflow-ellipsis">COLABORADORES</h5></div>
        </div>

       
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-black">48</h2></div>
            <div className="col-span-5 justify-right flex pl-16"><h5 className="self-end inline-block overflow-ellipsis">EMPRESAS <br></br>INCUBADAS</h5></div>
        </div>
        
       
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-black">150</h2></div>
            <div className="col-span-5 justify-right flex pl-16"><h5 className="self-end inline-block overflow-ellipsis">PROJETOS</h5></div>
        </div>
        </div>
        </div>
    </>
    );
}

export default DimentionPCI;