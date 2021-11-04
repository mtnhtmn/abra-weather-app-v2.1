import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Favorites from "./components/Favorites";


function App() {
  return (
   <Routes>
       <Route path={'/home'} element={<Home/>}/>
       <Route path={'/favorites'} element={<Favorites/>}/>

   </Routes>
  );
}

export default App;
