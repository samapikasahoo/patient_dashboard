import React from "react";
import Header from "../components/Header";
import { Result, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Special redirect rule for GitHub Pages deployment
  if (
    location.hash === "" &&
    (location.pathname === "/GOSH-FHIRworks2020-React-Dashboard" ||
      location.pathname === "/GOSH-FHIRworks2020-React-Dashboard/")
  ) {
    return <Navigate to="/home" replace />;
  }

  const returnHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <Header title="404 Not Found" />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={returnHome}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;
