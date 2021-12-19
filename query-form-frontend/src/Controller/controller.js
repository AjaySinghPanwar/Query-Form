import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QueryForm from "../Pages/app";
import ThankYou from "../Pages/thankyou";
import Error from "../Pages/error";

function Controller() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <QueryForm/>} />
                <Route path="thankyou" element={ <ThankYou/>}/>
                <Route path="error" element={ <Error/>}/>
            </Routes>
        </Router>
    );
}

export default Controller;