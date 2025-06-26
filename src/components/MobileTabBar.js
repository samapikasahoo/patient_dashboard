import React from "react";
import { TabBar } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import { HomeOutlined, TeamOutlined, SearchOutlined, BarChartOutlined } from "@ant-design/icons";

import { useLocation, useNavigate } from "react-router-dom";

const iconNonSelectStyle = { fontSize: "22px" };
const iconSelectedStyle = { fontSize: "22px", color: "#33A3F4" };

const MobileTabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ position: "fixed", width: "100%", bottom: 0, zIndex: 900 }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
        <TabBar.Item
          title="Home"
          key="Home"
          icon={<HomeOutlined style={iconNonSelectStyle} />}
          selectedIcon={<HomeOutlined style={iconSelectedStyle} />}
          selected={location.pathname === "/home" || location.pathname === "/"}
          onPress={() => navigate("/home")}
        />
        <TabBar.Item
          title="Patients"
          key="Patients"
          icon={<TeamOutlined style={iconNonSelectStyle} />}
          selectedIcon={<TeamOutlined style={iconSelectedStyle} />}
          selected={location.pathname === "/patients"}
          onPress={() => navigate("/patients")}
        />
        <TabBar.Item
          title="Search"
          key="Search"
          icon={<SearchOutlined style={iconNonSelectStyle} />}
          selectedIcon={<SearchOutlined style={iconSelectedStyle} />}
          selected={location.pathname === "/search"}
          onPress={() => navigate("/search")}
        />
        <TabBar.Item
          title="Statistics"
          key="Statistics"
          icon={<BarChartOutlined style={iconNonSelectStyle} />}
          selectedIcon={<BarChartOutlined style={iconSelectedStyle} />}
          selected={location.pathname === "/statistics"}
          onPress={() => navigate("/statistics")}
        />
      </TabBar>
    </div>
  );
};

export default MobileTabBar;
