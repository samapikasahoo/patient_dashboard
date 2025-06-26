import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Layout, Avatar, Popconfirm, Radio, Tooltip, Modal, message } from "antd";
import { CaretDownOutlined, UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import PatientPage from "./routes/patients";
import SearchPage from "./routes/search";
import StatisticsPage from "./routes/statistics";
import NotFoundPage from "./routes/NotFoundPage";
import HomePage from "./routes/home";

import SideMenu from "./components/SideMenu";
import MobileTabBar from "./components/MobileTabBar";
import profile from "./img/profile.png";
import logo from "./img/fhir-logo-long.png";
import icon from "./img/icon.png";

import GlobalContextConsumer from "./components/GlobalContext";
import { GlobalContext, GlobalContextProvider } from "./components/GlobalContext";

const { Header, Sider, Footer } = Layout;

class DesktopMenu extends React.Component {
  state = { collapsed: false };

  updateCollapsed = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        onCollapse={this.updateCollapsed}
        breakpoint="lg"
        width="230"
        style={{
          boxShadow: "7px 0px 20px -10px rgba(0,0,0,0.35)",
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}
      >
        <a href="/">
          <div
            className="logo"
            style={{
              background: `url("${this.state.collapsed ? icon : logo}") no-repeat`
            }}
          ></div>
        </a>
        <SideMenu />
        <div style={{ flexGrow: 1 }} />
      </Sider>
    );
  }
}

function AppHeader() {
  const location = useLocation();

  const titleMap = {
    "/": "FHIR Home",
    "/home": "FHIR Home",
    "/patients": "Patients",
    "/search": "Search",
    "/statistics": "Statistics"
  };

  const title = titleMap[location.pathname] || "404 Not Found";

  return (
    <Header className="site-layout-header">
      <h2 style={{ paddingLeft: "20px" }}>{title}</h2>
      <GlobalContextConsumer>
        {value => (
          <div style={{ flexGrow: 1, textAlign: "right", paddingRight: "20px" }}>
            <Radio.Group
              defaultValue="table"
              onChange={e => value.setViewInCard(e.target.value === "card")}
              size="small"
            >
              <Radio.Button value="table">
                <Tooltip title="View patients in a table">
                  <UnorderedListOutlined />
                </Tooltip>
              </Radio.Button>
              <Radio.Button value="card">
                <Tooltip title="View patients in cards">
                  <AppstoreOutlined />
                </Tooltip>
              </Radio.Button>
            </Radio.Group>
            <Popconfirm
              placement="bottomRight"
              title="Would you like to logout of the system?"
              onConfirm={() => {
                Modal.success({
                  title: "You have successfully logged out",
                  content: "You will be logged out of a real system, but not in this demo prototype."
                });
              }}
              okText="Logout"
              cancelText="Cancel"
            >
              <Avatar src={profile} style={{ marginLeft: "20px", marginRight: "5px" }} />
              {!value.isMobile && <CaretDownOutlined />}
            </Popconfirm>
          </div>
        )}
      </GlobalContextConsumer>
    </Header>
  );
}

function RouterContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/patients" element={<PatientPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

const FhirFooter = () => (
  <Footer style={{ textAlign: "center" }} className="footer">
    FHIR Dashboard ©2025 Created by <a href="https://github.com/samapikasahoo">samapikasahoo</a>
    <div style={{ opacity: 0.5 }}>
      Using{" "}
      <a href="https://www.hl7.org/fhir/" style={{ color: "black" }}>HL7 FHIR</a> Standards,
      <a href="https://cs.ucl.ac.uk" style={{ color: "black" }}> UCL CS</a> 
      <a href="https://github.com/samapikasahoo/patient_dashboard" style={{ color: "black" }}>
        COMP0016
      </a> for Hospital Outpatient Services
      <div>
        <a
          onClick={() => {
            window.$globalPatients = null;
            localStorage.removeItem("patients");
            message.success("Local data cache cleared");
          }}
        >
          Click here to clear local FHIR data cache
        </a>
      </div>
    </div>
  </Footer>
);

function App() {
  return (
    <Router basename="/patient_dashboard">
      <Layout style={{ minHeight: "100vh" }}>
        <GlobalContextConsumer>
          {value => (!value.isMobile ? <DesktopMenu /> : <MobileTabBar />)}
        </GlobalContextConsumer>

        <Layout className="site-layout">
          <AppHeader />
          <div className="container">
            <div className="page">
              <RouterContent />
              <FhirFooter />
            </div>
          </div>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
