import React from 'react';
import TV from '../../../assets/icons/tv.png'


const Equipment = () => {
    return (
        <>
            <div className="grid flex gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-black">
                <div className="flex mb-10 h-24 grid gap-4 grid-cols-4 md:grid-cols-4 h-20 flex-shrink-0">

                    <div className="w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${TV})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>
                    <div className="pl-4 md:pl-4 col-span-3 md:col-span-3 lg:col-span-3 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">texto</h5></div>
                </div>
                <div className="flex mb-10 h-24 grid gap-4 grid-cols-4 md:grid-cols-4 h-20 flex-shrink-0">
                    <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${TV})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>
                    <div className="pl-4 md:pl-4 col-span-3 md:col-span-3 lg:col-span-3 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">texto</h5></div>
                </div>
                <div className="flex mb-10 h-24 grid gap-4 grid-cols-4 md:grid-cols-4 h-20 flex-shrink-0">
                    <div className="pl-4 w-20 h-20 no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex bg-red rounded-lg" style={{ backgroundImage: `url(${TV})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>
                    <div className="pl-4 md:pl-4 col-span-3 md:col-span-3 lg:col-span-3 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">texto</h5></div>
                </div>
            </div>
        </>
);
}

export default Equipment;






