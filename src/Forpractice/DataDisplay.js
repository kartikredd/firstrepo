import { useEffect, useState } from "react";
import { Typography } from "antd";
const {TItle}=Typography;

function DataDisplay() {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userdata"));
        setUserData(userData);
    }, [])
    return (
        <div>
            <center>
            <Title level={2} style={{color:"blue"}}>Your Name: {userData.name}</Title>
            <Title level={3} style={{color:"red"}}> Your Password: {userData.password}</Title>
            </center>
        </div>
    );
}
export default DataDisplay;
