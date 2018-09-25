import React from 'react';

const VideoListItem=({video,onVideoSelect})=>{
    //console.log(video);
    //console.log(props.video);
    const imgurl=video.snippet.thumbnails.default.url;
    const imgtitle=video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgurl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{imgtitle}</div>
                </div>
            </div>
        </li>);
}

export default VideoListItem;