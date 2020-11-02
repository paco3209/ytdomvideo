import React from 'react';

import ShareButtons from './share_buttons';

const VideoDetail = (props) => {
    const video = props.video;
    
    if(!video){
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (
        <div className="video-detail">
            <div className="ebed-responsive embd-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} style={{height:'400px',width:'100%'}}  allow="autoplay; fullscreen"></iframe>
            </div>
            <ShareButtons video={videoId} />
        </div>
    );
};

export default VideoDetail;