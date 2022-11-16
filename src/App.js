import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Meusdados from './Meusdados';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/meus-dados" element={<Meusdados />} />
            </Routes>
        </BrowserRouter>
    )
}
