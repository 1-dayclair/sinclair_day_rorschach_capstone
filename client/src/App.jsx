import { useState } from 'react';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Start from './Components/Start';
import SignUp from "./Components/SignUp";
import WelcomeBack from "./Components/WelcomeBack";
import Rorschach from './Components/Rorschach';

import './App.css'

function App() {

    // const [search, setSearch] = useState("");

    // useEffect(() => {
    //     fetch("/create/data")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("There was a problem accessing the route...");
    //             } return response.json();
    //         })
    //         .then(data => {
    //             setSearch(data.text)
    //             console.log(data.text);
    //         })
    //         .catch(error => console.error("ERROR", error));
    // }, []);


    return (
        <>
            <Routes>

                <Route path="/" element={<Start />} />
                <Route path="/quick" element={<SignUp />} />
                <Route path="/welcome" element={<WelcomeBack />} />
                <Route path="/circular" element={<Rorschach />} />

            </Routes>
        </>
    );
};



export default App;
