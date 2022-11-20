import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Meusdados from './Meusdados';
import Entradas from './Entradas';
import Saidas from './Saidas';
import {AuthProvider} from "./auth"

export default function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/meus-dados" element={<Meusdados />} />
                    <Route path="/entradas" element={<Entradas />} />
                    <Route path="/saidas" element={<Saidas />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
