import { Layout, Image, Typography, Form, Input, Button } from "antd";
import SitaraLogo from "./Logo.svg";
import MicroSoftLogo from "./Microsoft_logo 1.png";
import BagLogo from "./Group.png";
import GoogleLogo from "./flat-color-icons_google.png";
import { Footer, Header } from "antd/es/layout/layout";
import React from "react";
const { Text } = Typography;
const LoginForm = () => {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <Image src={SitaraLogo} alt="SitaraLogo" />
        </Header>
      </Layout>
      <div
        style={{
          textAlign: "center",
          marginTop: "141px",
          display: "block",
          margin: "auto",
          width: "358px",
          height: "600px",
        }}
      >
        <Typography.Title level={1}>Login.</Typography.Title>
        <div
          style={{
            marginTop: "48px",
            // marginBottom: "16px",
            // marginRight: "10px",
          }}
        >
          <Button
            style={{
              backgroundColor: " #0E1235",
              width: "167px",
              height: "48px",
              color: "white",
            }}
          >
            {" "}
            <Image
              src={MicroSoftLogo}
              alt="MicroSoftLogo"
              style={{ paddingRight: "10px" }}
            />
            Microsoft
          </Button>
          <Button
            style={{ width: "167px", height: "48px", marginLeft: "24px" }}
          >
            <Image
              src={GoogleLogo}
              alt="GoogleLogo"
              style={{ paddingRight: "10px" }}
            />
            Google
          </Button>
        </div>
        {/* <Typography style={{ marginTop: "16px", marginBottom: "20px" }}>
          or
        </Typography> */}
        <Form layout="vertical">
          <div
            style={{
              width: "358px",
              height: "40px",
              border: "1px ",
              borderRadius: "2px",
              textAlign: "center",
              margin: "auto",
              // marginTop: "20px",
              padding: "8px 12px 8px 12px",
            }}
          >
            <Form.Item label="Email ID" style={{ marginBottom: "24px" }}>
              <Input
                placeholder="Enter your email ID"
                style={{ marginTop: "40x" }}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              >
                <Text>
                  <Input
                    type="checkbox"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Remember me
                </Text>
                <Text>Reset Password?</Text>
              </div>
              <Button
                style={{
                  width: "358px",
                  height: "36px",
                  backgroundColor: "#0E1235",
                  color: "white",
                }}
              >
                Sign In
              </Button>
            </Form.Item>
            <Button
              style={{
                marginTop: "10px",
                width: "358px",
                height: "48px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
            >
              <Image
                src={BagLogo}
                alt="Baglogo"
                style={{ paddingRight: "10px" }}
              />
              Continue with Work account
            </Button>
            <div style={{ textAlign: "left", marginTop: "12px" }}>
              <Text underline>Sign in using magic link</Text>
              <br />
              <Text underline>Sign in using code</Text>
            </div>
            <div
              style={{
                textAlign: "right",
                paddingRight: "6px",
                marginTop: "16px",
              }}
            >
              <Text>No account?</Text>
              <Button style={{ backgroundColor: "orange" }}>Create one</Button>
            </div>
          </div>
        </Form>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "center", marginTop: "105px" }}>
        <Footer>
          © 2023 beyondscale technologies. All rights reserved. | Privacy
        </Footer>
      </div>
    </>
  );
};
export default LoginForm;
