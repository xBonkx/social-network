import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/header";
import Nav from "./components/navbar/navbar";
import Prof from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import Idle from "./components/idle/idle.jsx";
import React from "react";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Nav/>
                <Routes>
                    <Route path="/profile/" element={<Prof postData={props.appState.postData}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs contactData={props.appState.contactData} textData={props.appState.textData}/>}/>
                    <Route path="/idle/*" element={<Idle date={new Date()} />}/>
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;





