import React from "react";
import { Button, Layout } from "antd";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
    const navigate=useNavigate();
    const handleOnClick=()=>
    {
        navigate('/login');
    }
    return(
        <Layout>
                <Button onClick={handleOnClick} 
                style={{ backgroundColor:"gray",
                textAlign:"right",
                color:"red",
                padding:"20px"}}>Login</Button>
        </Layout>


    )
}
export default Navbar;