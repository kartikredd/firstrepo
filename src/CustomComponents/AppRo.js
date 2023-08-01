import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Demo1";
import Login from "./Login";
const AppRo = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} />
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default AppRo;