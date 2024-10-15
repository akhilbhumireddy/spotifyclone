import React from "react";
import {
  FaVideo,
  FaShoppingCart,
  FaBookOpen,
  FaCalendarAlt,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";
import "../styles/ControlPanel.css";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <h2 className="panel-title">Dashboard</h2>
      <ul className="panel-options">
        <li>
          <FaVideo /> Playlist Manager
        </li>
        <li>
          <FaShoppingCart /> Shoppable Video
        </li>
        <li>
          <FaBookOpen /> Story
        </li>
        <li>
          <FaCalendarAlt /> Calendar
        </li>
        <li>
          <FaUserFriends /> Hire Influencer
        </li>
        <li>
          <FaChartLine /> Revenue
        </li>
      </ul>
    </div>
  );
};

export default ControlPanel;
