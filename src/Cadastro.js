import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cadastro(){
    return(
        <>
            <Title>MyWallet</Title>
            <Signup>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>
                <input type="password" placeholder="Confirme a senha"></input>

            <button>Cadastrar</button>
            <Link to="/">
                <Logar>Já tem uma conta? Entre agora!</Logar>
            </Link>
        </Signup></>    )
}
const Title = styled.p`
    color:#FFFFFF;
    font-size: 32px;
    display:flex;
    justify-content:center;
    margin-top:95px;
`
const Signup = styled.div`
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