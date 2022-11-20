import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate} from "react-router-dom";
import { LoginContext } from "./auth";
import axios from "axios";

export default function Saidas() {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const {setToken} = useContext(LoginContext);
    const navigate = useNavigate();


    function saida(event){
        event.preventDefault();

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }

        const requisicao = axios.post("http://localhost/5000/reports", {
            value,
            description,
            type:"saida"
        },config);
        requisicao.then(response => {
            setToken(response.data.token);
            navigate('/meus-dados');
        })
    }

    return (
        <>
            <Titulosaida>Nova saida</Titulosaida>
            <Novasaida onSubmit={saida}>
                <input type="text" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}></input>
                <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></input>
                <button type="submit">Salvar saida</button>
            </Novasaida>
        </>
    )
}

const Titulosaida = styled.p`
    margin-top:25px;
    margin-left:24px;
    font-size: 26px;
    color: #FFFFFF;
    font-weight: 700;

`
const Novasaida = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:40px;
    input:nth-child(1){
        width:326px;
        height:58px;  
        border-radius: 5px;
        border:none;
    }
    input:nth-child(2){
        width:326px;
        height:58px;  
        border-radius: 5px;
        border:none;
        margin-top:13px;
    }
    button{
        color:#FFFFFF;
        background: #A328D6;
        border:none;
        width: 326px;
        height: 46px;
        margin-top:13px;
        font-weight: 700;
        font-size: 20px;
    }
`