import React from 'react';



const PeopleDimentionDF = () => {
    return (
        <>
        <div class="container m-auto align-middle flex " style={{height: '50vh'}}>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 justify-center align-middle " style={{height: '50%'}}>
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-red">1</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">DESIGN <bR></bR>STUDIO</h5></div>
        </div>

       
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-red">6</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">GABINETES</h5></div>
        </div>
        
       
        <div className="grid flex gap-4 grid-cols-6  align-middle m-auto">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-red">6</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">OFICINAS</h5></div>
        </div>
       
    
        <div className="grid flex gap-4 grid-cols-6 align-middle m-auto ">
            <div className="w-20 justify-center flex"><h2 className="self-center inline-block m-auto text-red">1</h2></div>
            <div className="col-span-5 justify-right flex pl-8"><h5 className="self-end inline-block overflow-ellipsis">OPEN SPACE <bR></bR>PARA EVENTOS</h5></div>
        </div>
    </div>
    </div>
    </>
    );
}

export default PeopleDimentionDF;