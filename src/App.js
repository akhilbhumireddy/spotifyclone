import React from "react";
import ControlPanel from "./components/ControlPanel";
import VideoFeed from "./components/VideoFeed";
import RightMenu from "./components/RightMenu";
import { FaSearch, FaBell, FaQuestionCircle, FaMapSigns } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">Bloosh</div>
        <div className="header-controls">
          <button className="top-button">
            <FaQuestionCircle /> Support
          </button>
          <button className="top-button">
            <FaMapSigns /> Product Tour
          </button>
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
          <FaBell className="icon" />
          <div className="user-avatar">A</div>
        </div>
      </header>
      <div className="content">
        <ControlPanel />
        <VideoFeed />
        <RightMenu />
      </div>
    </div>
  );
};

export default App;
