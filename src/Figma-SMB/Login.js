import React from "react";
import SitaraLogo from "./Logo.svg";
import GoogleLogo from "./flat-color-icons_google.png";
import MicrosoftLogo from "./Microsoft_logo 1.png";
import Grouplogo from "./Group.png";

import { Button, Typography, Input, Form, Image, Space, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
const { Text } = Typography;

const Login = () => {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "white", paddingTop: "10px" }}>
          <Image src={SitaraLogo} alt="" style={{ paddingTop: "10px" }} />
        </Header>
      </Layout>
      <Form>
        <div
          style={{
            width: "450px",
            height: "500px",
            textAlign: "center",
            marginLeft: "-25%",
            position: "absolute",
            marginRight: "-25%",
          }}
        >
          <Typography.Title level={2}>Login.</Typography.Title>
          <Space>
            <Button
              style={{
                backgroundColor: "skyblue",
                border: "2px",
                borderRadius: "8px",
              }}
            >
              <Image
                src={MicrosoftLogo}
                alt=""
                style={{ width: "10px", height: "8px" }}
              />
              MicroSoft
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "2px",
              }}
            >
              <Image
                src={GoogleLogo}
                alt=""
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "white",
                }}
              />
              Google
            </Button>
          </Space>
          <Typography>or</Typography>
          <Form.Item>
            <Input
              placeholder="enter your Email"
              type="text"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="enter password"
              type="password"
              style={{ width: "50%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ backgroundColor: "darkblue", width: "50%" }}
            >
              signin
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="submit"
              style={{ backgroundColor: "white", width: "50%" }}
            >
              <Image
                src={Grouplogo}
                alt=""
                style={{ width: "22px", height: "22px" }}
              />
              continue with workAccount
            </Button>
          </Form.Item>
          <Form.Item>
            <div style={{ float: "left", width: "50%" }}>
              <Text underline>sign in using link</Text>
              <br />
              <Text underline>sign in using code</Text>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                backgroundColor: "orange",
                float: "right",
              }}
            >
              Create Account
            </Button>
            <Text
              style={{
                float: "right",
                padding: "0px 6px",
                // justifyContent: "space-between",
              }}
            >
              No Account?
            </Text>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default Login;
