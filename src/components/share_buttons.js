import React,{useState, useEffect} from 'react';
import { EmailShareButton, EmailIcon, FacebookShareButton,FacebookIcon, LinkedinShareButton,LinkedinIcon, TwitterShareButton,TwitterIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';

const  Share_buttons =(props) => {
    
    const videoId = props.video;
    
    const url = `https://www.youtube.com/watch?v=${videoId}`
    
    return (
        <div className="btn-share">
            <EmailShareButton url={url}>
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <TwitterShareButton url={url}  >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={url} >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={url}>
                <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round={true}/>
            </LinkedinShareButton>


        </div>
    )
}

export default Share_buttons
