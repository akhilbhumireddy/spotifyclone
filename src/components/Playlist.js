import React from "react";
import "../styles/Playlist.css";

const Playlist = ({ playlist }) => {
  return (
    <div className="playlist-container">
      <h2>{playlist.name}</h2>
      <div className="video-list">
        {playlist.videos.map((video) => (
          <div key={video.id} className="video-item">
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
