import React from 'react';
import TV from '../../../assets/icons/tv.png'


const GeneralSpecsEq = () => {
    return (
        <>
        <div className="grid flex gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-black">

            <div className="flex mb-10 h-24 grid gap-4 grid-cols-7 md:grid-cols-7 h-20 flex-shrink-0">
                <div className="w-20 h-20 bg-red rounded-lg  no-repeat bg-no-repeat bg-center self-center inline-block m-auto flex" style={{ backgroundImage: `url(${TV})`, backgroundSize: 'cover' }} alt="iconOficina" ></div>
                <div className="ml-14 md:ml-14 lg:ml-8 col-span-3 md:col-span-6 lg:col-span-6 justify-right flex"><h5 className="self-center inline-block overflow-ellipsis">texto</h5></div>
            </div>
        </div>
    </>
    );
}

export default GeneralSpecsEq;
