
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioPages from './pages/InicioPages'
import NosotrosPages from './pages/NosotrosPages';
import NoticiasPages from './pages/NoticiasPages';
import AstronomiaPages from './pages/AstronomiaPages';
import JuegoPage from './pages/JuegoPage';
import JuegoContPage from './pages/JuegoContPage';
import InicioSesionPages from './pages/InicioSesionPages';
import RegistratePage from './pages/RegistratePage';
import HistoriaPages from './pages/HistoriaPages';

import ContaminacionLuminicaPage from './pages/ContaminacionLuminicaPage';

const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPages/>}></Route>
        <Route path="/Nosotros" element={<NosotrosPages/>}></Route>
        <Route path="/Noticias" element={<NoticiasPages/>}></Route>
        <Route path="/Astronomia" element={<AstronomiaPages/>}></Route>
        <Route path="/Juego" element={<JuegoPage />}></Route>
        <Route path="/JuegoCont" element={<JuegoContPage />}></Route>
        <Route path="/InicioSesion" element={<InicioSesionPages />}></Route>
        <Route path="/registrate" element={<RegistratePage />}></Route>

        <Route path="/Historia" element={<HistoriaPages/>}></Route>


        <Route path="/ContaminacionLuminica" element={<ContaminacionLuminicaPage/>}></Route>
      

      </Routes>
      </BrowserRouter>
    );
  };
  
export default App;