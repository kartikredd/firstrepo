import React, { useState } from "react";
import { Button, Input, Space } from 'antd';
import './Form.css'


const Login = () => {
    const [data, setData] = useState({
        firstname: '',
        password: '',
        email: '',
    })
    const handleonChange = (e) => {
        const { name, value } = e.target;
        setData((previous) => {
            return { ...previous, [name]: value }
        })
    }
    return (
        <form className="table">
            <Space />
            <center>firstname
                <Input className="name"
                    placeholder="input  text"
                    enterButton="Search"
                    size="large" name='firstname' onChange={handleonChange} />
                <Space />

                password:
                <input type="number" name='password' onChange={handleonChange} />
                <Space />

                email:
                <input type="email" name='email' onChange={handleonChange} />
                <Space />

                <Button type="primary" onClick={(e) => { e.preventDefault(); console.log(data) }}>Click</Button>

            </center>
        </form>
    )
}
export default Login;