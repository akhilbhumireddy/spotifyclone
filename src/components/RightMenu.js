import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LeftMenu.css";
import { FaMusic } from "react-icons/fa"; // Icons for visual appeal

const RightMenu = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.post(
          "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList",
          { Content_Type: 2 },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
              "X-Tenant-Key": "TYKE070323",
            },
          }
        );
        console.log("Playlists Response:", response.data);
        if (Array.isArray(response.data.data)) {
          setPlaylists(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="left-menu">
      <h2 className="menu-title">🎵 My Playlists</h2>
      <div className="playlists-container">
        {playlists.length > 0 ? (
          playlists.map((playlist, index) => (
            <div key={`${playlist.id}-${index}`} className="playlist-card">
              <FaMusic className="playlist-icon" />
              <div className="playlist-info">
                <h4>{playlist.Name}</h4>
                <p>{playlist.Description || 0} Videos</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-state">No Playlists Available</p>
        )}
      </div>
    </div>
  );
};

export default RightMenu;
