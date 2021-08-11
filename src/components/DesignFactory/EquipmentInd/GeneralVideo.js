import React from 'react';
import ReactPlayer from 'react-player';
import '../../../styles/components.scss'



const GeneralVideo = () => {

    return (
        <>
        <div className="player-wrapper">
         <ReactPlayer  className="react-player "
            url="https://www.youtube.com/watch?v=be-95NDZLH4"
            width="100%"
            height="100%"
        />
        </div>
        </>
    );
}
export default GeneralVideo;