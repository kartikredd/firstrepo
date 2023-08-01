import { useEffect, useState } from "react";
import { Typography } from "antd";

function DataDisplay() {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userdata"));
        setUserData(userData);
    }, [])
    return (
        <div>
            <center>
            <Typography.Title level={2} style={{color:"blue"}}>Your Name: {userData.name}</Typography.Title>
            <Typography.Title level={3} style={{color:"red"}}> Your Password: {userData.password}</Typography.Title>
            </center>
        </div>
    );
}
export default DataDisplay;
