import { useState } from "react";
import { Input, Button } from "antd";

const LoginDetails = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")


    const handle = () => {
        localStorage.setItem("name", name)
        localStorage.setItem("number", number)
        localStorage.setItem("password", password)
    }


    return (
        <>
            <div>
                <Input type="name" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                <br />

                <Input type="number" placeholder="Phonenumber" onChange={(e) => setNumber(e.target.value)} />
                <br />


                <Input type="text" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <br />


                <Button onClick={handle} type="primary" >Click Me</Button>
                <div>
                    {localStorage.getItem("name")}
                    <div />
                    {localStorage.getItem("number")}
                    <div />
                    {localStorage.getItem("password")}
                </div>
            </div>
        </>

    )
}
export default LoginDetails;