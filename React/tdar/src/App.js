
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioPages from './pages/InicioPages'
import NosotrosPages from './pages/NosotrosPages';
import NoticiasPages from './pages/NoticiasPages';
import AstronomiaPages from './pages/AstronomiaPages';



const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPages/>}></Route>
        <Route path="/Nosotros" element={<NosotrosPages/>}></Route>
        <Route path="/Noticias" element={<NoticiasPages/>}></Route>
        <Route path="/Astronomia" element={<AstronomiaPages/>}></Route>

      
        {/* <Route path="/juego" element={<JuegoPage/>}></Route> */}
      </Routes>
      </BrowserRouter>
    );
  };
  
export default App;
  