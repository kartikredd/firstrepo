import React from "react";
import './Form.css';
import { Input, Button } from "antd";
const Form1 = (props) => {
    return (
        <form>
            <Input className="name" placeholder='enter input' />
            <br />
            <br />
            <Button type="Primary">Click</Button>
        </form>
    )

}
export default Form1;