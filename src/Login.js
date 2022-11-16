import styled from "styled-components";
import { Link} from "react-router-dom";


export default function Login(){
    return(
        <>
            <Title>MyWallet</Title>
            <Signin>
                <input type="text" placeholder="email"></input>
                <input type="password" placeholder="senha"></input>
                <button>Entrar</button>
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
const Signin = styled.div`
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