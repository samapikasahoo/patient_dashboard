import React from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  TeamOutlined,
  SearchOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

// Convert to functional component to use hooks
const SideMenu = () => {
  const location = useLocation(); // useLocation hook replaces withRouter

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={["/"]}
    >
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="/patients" icon={<TeamOutlined />}>
        <NavLink to="/patients">Patient List</NavLink>
      </Menu.Item>
      <Menu.Item key="/search" icon={<SearchOutlined />}>
        <NavLink to="/search">Search</NavLink>
      </Menu.Item>
      <Menu.Item key="/statistics" icon={<BarChartOutlined />}>
        <NavLink to="/statistics">Statistics</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
