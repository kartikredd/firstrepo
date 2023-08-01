import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sample from "./Sample";
import Click from "./Click";
const Demo = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Click />} />
                    <Route path="/sample" element={<Sample />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Demo;