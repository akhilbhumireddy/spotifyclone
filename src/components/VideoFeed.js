import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/VideoFeed.css";

const VideoFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.post(
          "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
          { Index: 1, ContentType: [2], IsTagged: false },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
              "X-Tenant-Key": "TYKE070323",
            },
          }
        );
        console.log("videofeed Response:", response.data);
        if (Array.isArray(response.data.data.Feeds)) {
          setVideos(response.data.data.Feeds);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-feed">
      <h2 className="video-feed-title">🎬 Video Feed</h2>
      <div className="video-grid">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={`${video.id}-${index}`} className="video-card">
              <img src={video.Thumbnail_URL} alt={video.Thumbnail_Title} />
              <h4>{video.Thumbnail_Title}</h4>
            </div>
          ))
        ) : (
          <p>No Videos Available</p>
        )}
      </div>
    </div>
  );
};

export default VideoFeed;
