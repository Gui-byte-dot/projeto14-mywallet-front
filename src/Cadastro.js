import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Cadastro(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function cadastrar(event){
        event.preventDefault();
        const requisicao = axios.post("https://localhost/5000/sign-up",{
            name,
            email,
            password
        })
        
        requisicao.then(response => {
            navigate('/');
            console.log(response.data)
        })
        requisicao.catch(err => {
            console.log(err);
        })
    }
    return(
        <>
            <Title>MyWallet</Title>
            <Signup onSubmit={cadastrar}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.password)}></input>
                <input type="password" placeholder="Confirme a senha"></input>
                <button type="submit">Cadastrar</button>
                <Link to="/">
                    <Logar>Já tem uma conta? Entre agora!</Logar>
                </Link>
        </Signup></>    
        )
}

// http://localhost:3002/products

const Title = styled.p`
    color:#FFFFFF;
    font-size: 32px;
    display:flex;
    justify-content:center;
    margin-top:95px;
`
const Signup = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:28px;
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
    input:nth-child(3){
        width:326px;
        height:58px;  
        border-radius: 5px;
        border:none;
        margin-top:13px;

    }
    input:nth-child(4){
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
const Logar = styled.p`
    color: #FFFFFF;
    font-size: 15px;
    display:flex;
    justify-content:center;
    margin-top: 36px;

`