import styled from "styled-components";
import { Link, useNavigate} from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./auth";



export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useContext(LoginContext)
    const navigate = useNavigate();

    function login(event){
        event.preventDefault();
        const requisicao = axios.post("http://localhost:5000/sign-in",{
            email,
            password
        })
        requisicao.then(response => {
            setToken(response.data.token);
            navigate('/meus-dados');
            console.log(response.data)
        })
    }

    return(
        <>
            <Title>MyWallet</Title>
            <Signin onSubmit={login}>
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Entrar</button>
            </Signin>
            <Link to="/cadastro">
                <Cadastrar>Já tem uma conta? Entre agora!</Cadastrar>
            </Link>

        </>

    )
}
const Title = styled.p`
    color:#FFFFFF;
    font-size: 32px;
    display:flex;
    justify-content:center;
    margin-top:159px;
`
const Signin = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:24px;
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
        font-size: 20px;
    }
`
const Cadastrar = styled.p`
    color: #FFFFFF;
    font-size: 15px;
    display:flex;
    justify-content:center;
    margin-top: 36px;

`