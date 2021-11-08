import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import {CssBaseline} from "@mui/material";


function App() {
    return (
        <Routes>
            <CssBaseline>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/favorites'} element={<Favorites/>}/>
            </CssBaseline>
        </Routes>
    );
}

export default App;
