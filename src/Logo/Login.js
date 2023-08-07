import React from "react";
import SitaraLogo from "./Logo.svg";
import MicrsoftLogo from "./Microsoft_logo 1.png";
import GoogleLogo from "./flat-color-icons_google.png";
import { Button, Image, Input, Layout, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "white", paddingTop: "10px" }}>
          <Image src={SitaraLogo} alt="" />
        </Header>
      </Layout>
      <div style={{ textAlign: "center" }}>
        <Typography>Login.</Typography>
        <div
          style={{
            border: "2px All solid",
            borderRadius: "8px",
            width: "167px",
            height: "67px",
            padding: "12px 22px 12px 22px",
            size: "16px",
            margin: "20px",
            display: "flex",
          }}
        ></div>
        <Button>
          <Image
            src={MicrsoftLogo}
            alt="Mslogo"
            style={{
              // width: "18px",
              // height: "18px",
              paddingTop: "0.7px",
              paddingLeft: "9px",
            }}
          />
          Microsoft
        </Button>
        <Button>
          <Image
            src={GoogleLogo}
            alt="GoogleLogo"
            style={{
              // width: "18px",
              // height: "18px",
              paddingTop: "0.7px",
              paddingLeft: "9px",
            }}
          />
          Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
