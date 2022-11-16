import React from "react";
import styled from "styled-components";

export default function Entradas(){
    return(
        <>
            <Tituloentrada>Nova entrada</Tituloentrada>
            <Novaentrada>
                <input type="text" placeholder="Valor"></input>
                <input type="text" placeholder="Descrição"></input>
                <button>Salvar entrada</button>
            </Novaentrada>
        </>

    )
}
const Tituloentrada = styled.p`
    margin-top:25px;
    margin-left:24px;
    font-size: 26px;
    color: #FFFFFF;
    font-weight: 700;

`
const Novaentrada = styled.div`
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