import { Layout, Image, Typography, Button } from "antd";
import SitaraLogo from "./Logo.svg";
import Arrowlogo from "./Arrows.png";
import LensLogo from "./Frame 4.png";
// import "./LensLogo.css";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
const Landingpage = () => {
  const navigate = useNavigate();
  const handlonclick = () => {
    navigate("/login");
  };

  return (
    <>
      <div>
        <Layout>
          <Header style={{ backgroundColor: "white" }}>
            <Image src={SitaraLogo} alt="Sitaralogo" />
            <Button
              style={{
                float: "right",
                marginTop: "11px",
                backgroundColor: "orange",
                padding: "8px 21px 8px 21px",
              }}
              onClick={handlonclick}
            >
              Login
            </Button>
          </Header>
        </Layout>
      </div>
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Typography
          style={{
            fontSize: "70px",
            fontWeight: "800",
            marginTop: "auto",
            marginBottom: "9px",
          }}
        >
          An All-Inclusive
          <br /> Software Suite
        </Typography>
        <Typography style={{ fontSize: "18px" }}>
          From inventory to billing, we build a foolproof operating system for
          your business
          <br /> that guarantees more profits and no stress.
        </Typography>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          style={{
            backgroundColor: "#0E1235",
            color: "white",
            marginTop: "10px",
            width: "169px",
            height: "48px",
          }}
        >
          Try for free
          <Image
            src={Arrowlogo}
            alt="Arrowlogo"
            style={{ paddingLeft: "10px" }}
          />
        </Button>
      </div>
    </>
  );
};
export default Landingpage;
