import React from 'react';



const DimentionIncubator = () => {
    return (
        <>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center align-middle pl-14 md:pl-14 lg:pl-24 xl:pl-72 pt-48 pb-48" style={{height: '50%'}}>
        <div className="grid flex gap-4 grid-cols-6 align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-green">12</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">ESPAÇOS E <bR></bR>EQUIPAMETOS</h5></div>
        </div>

       
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-green">11</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">SERVIÇOS</h5></div>
        </div>
        
       
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-green">4</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">EVENTOS</h5></div>
        </div>
        </div>
    </>
    );
}

export default DimentionIncubator;