
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioPages from './pages/InicioPages'
import NosotrosPages from './pages/NosotrosPages';
import NoticiasPages from './pages/NoticiasPages';
import AstronomiaPages from './pages/AstronomiaPages';
import JuegoPage from './pages/JuegoPage';
import InicioSesionPages from './pages/InicioSesionPages';
import RegistratePage from './pages/RegistratePage';
import JuegoTamanioPrueba from './pages/JuegoTamanioPrueba';



const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPages/>}></Route>
        <Route path="/Nosotros" element={<NosotrosPages/>}></Route>
        <Route path="/Noticias" element={<NoticiasPages/>}></Route>
        <Route path="/Astronomia" element={<AstronomiaPages/>}></Route>
        <Route path="/Juego" element={<JuegoTamanioPrueba />}></Route>
        <Route path="/InicioSesion" element={<InicioSesionPages />}></Route>
        <Route path="/registrate" element={<RegistratePage />}></Route>
      
      </Routes>
      </BrowserRouter>
    );
  };
  
export default App;
  