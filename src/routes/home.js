import React from "react";
import "./home.css";
import icon_user from "../img/icon_user.png";
import icon_search from "../img/icon_search.png";
import icon_stats from "../img/icon_stats.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header title="FHIR Dashboard" isHome="true" />
      <div className="center_float">
        <div className="menu_card" onClick={() => navigate("/patients")}>
          <img src={icon_user} alt="user" />
          <div className="text">Patients</div>
        </div>
        <div className="menu_card" onClick={() => navigate("/search")}>
          <img src={icon_search} alt="search" />
          <div className="text">Search</div>
        </div>
        <div className="menu_card" onClick={() => navigate("/statistics")}>
          <img src={icon_stats} alt="stats" />
          <div className="text">Statistics</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
