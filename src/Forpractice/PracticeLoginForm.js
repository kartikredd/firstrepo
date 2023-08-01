import { Button, Input, Typography, Layout, Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticeLoginForm = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const handle = (e) => {
    const { name, value } = e.target;
    setData((previous) => {
      return { ...previous, [name]: value };
    });
  };
  const navigate = useNavigate();
  const handleOnclick = (e) => {
    e.preventDefault();
    localStorage.setItem("userdata", JSON.stringify(data));
    navigate("/datadisplay");
  };
  return (
    <Form>
      <center>
        <Layout.Header style={{ backgroundColor: "gray" }}></Layout.Header>
        <br />
        <div style={{ backgroundColor: "skyblue", width: "40%" }}>
          <br />
          <Typography.Title level={1}>Loginform</Typography.Title>
          <Form.Item
            type="text"
            name="name"
            onChange={handle}
            placeholder="enter your name"
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            type="password"
            name="password"
            onChange={handle}
            placeholder="enter your password"
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>
          <div />
          <br />
          <Button type="primary" onClick={handleOnclick}>
            Submit
          </Button>
        </div>
      </center>
    </Form>
  );
};
export default PracticeLoginForm;
