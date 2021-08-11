import React from 'react';
import Loader from "react-loader-spinner";


const Loading = () => {
    return (
        <>
        <div className="h-screen container m-auto  grid justify-items-center align-middle ">
            <div className="mt-96 md:mt-80 lg:mt-48 flex">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
            </div>
            </div>
        </>
    );
}

export default Loading;