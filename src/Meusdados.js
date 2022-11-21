import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { LoginContext } from "./auth";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Meusdados() {
    const { token } = useContext(LoginContext);
    const [dados, setDados] = useState([]);


    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get("http://localhost:5000/meus-dados", config);
        promise.then((res) => {
            setDados(res.data);
            console.log(res.data);
        })
    }, [token])

  
        
    return (
            <>
                <div>
                    <>
                        <Name>
                            <p>Olá, fulano</p>
                            <ion-icon name="exit-outline"></ion-icon>
                        </Name>
                        <Info>
                            {dados.map(item => <p>{item.value}</p>)}
                        </Info>
                        <Entradasesaidas>
                            <Link to='/entradas'>
                                <Entradas>
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                    <div>Nova Entrada</div>
                                </Entradas>
                            </Link>
                            <Link to='/saidas'>
                                <Saidas>
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                    <div>Nova Saída</div>
                                </Saidas>
                            </Link>
                        </Entradasesaidas>
                    </>
                </div>
            </>
        )
    


    
}
const Info = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left:25px;
    margin-top:22px;
    p{
        font-size: 20px;
        color: #868686;
    }
    
`
const Name = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top:22px;
    margin-left:25px;
    margin-right:24px;
    p{
        color: #FFFFFF;
        font-size: 26px;

    }
    ion-icon{
        width:23px;
        height:24px;
    }
`
const Entradasesaidas = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:13px;
`
const Entradas = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    margin-left:25px;
    ion-icon{
        margin-top:10.56px;
        color: #FFFFFF;
        margin-left:10px;
    }
    div{
        margin-top:32.56px;
        color: #FFFFFF;
        margin-left:10px;
        width: 64px;
        height: 40px;
        font-size: 17px;
    }
`
const Saidas = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    margin-left:15px;
    ion-icon{
        margin-top:10.56px;
        color: #FFFFFF;
        margin-left:10px;
    }
    div{
        margin-top:32.56px;
        color: #FFFFFF;
        margin-left:10px;
        width: 64px;
        height: 40px;
        font-size: 17px;
    }
    

`