import styled from "styled-components";
import logo from "../assets/logo.png"

export default function BoasVindas({setIniciar, iniciar}){
    function iniciarRecall(){
        setIniciar(true);
    }
    return(
        <ContainerBoasVindas iniciar={iniciar}>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={iniciarRecall}>Iniciar Recall!</button>
        </ContainerBoasVindas>
    )
}

const ContainerBoasVindas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    height: 335px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    display: ${({iniciar}) => iniciar && "none"};
    img{
        width: 136px;
        height: 161px;
    }
    h1{
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }
    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`