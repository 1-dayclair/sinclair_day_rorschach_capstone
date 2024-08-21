import { Route, Routes } from "react-router-dom";

import Start from './Components/Start';
import SignUp from "./Components/SignUp";
import WelcomeBack from "./Components/WelcomeBack";
import Rorschach from './Components/Rorschach';

import './App.css'

function App() {

    return (
        <>
            <Routes>

                <Route path="/" element={<Start />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<WelcomeBack />} />
                <Route path="/circular" element={<Rorschach />} />

            </Routes>
        </>
    );
};



export default App;
