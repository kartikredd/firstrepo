import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
const { Title } = Typography;
const PracticeSingup = () => {
    const [data, setData] = useState(
        {
            firstname: '',
            lastname: '',
            password: '',
            phno: '',
        }
    )
    const handle = (e) => {
        const { name, value } = e.target;
        setData((previous) => {
            return { ...previous, [name]: value }
        })
    }
    return (
        <>
            <div>
                <Title level={2}>singup Form</Title>
                <Input type="text" onChange={handle} name='firstname' placeholder="enter firstname" />
                <Input type="text" onChange={handle} name='lastname' placeholder="enter lastname" />
                <Input type="text" onChange={handle} name='password' placeholder="enter password" />
                <Input type="number" onChange={handle} name='phno' placeholder="enter number" />
                <Button type="primary" onClick={(e) => { e.preventDefault(); console.log(data) }}>click</Button>
            </div>
        </>
    )
}
export default PracticeSingup;