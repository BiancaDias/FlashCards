import girar from "../assets/seta_virar.png"
import play from "../assets/seta_play.png"
import styled from "styled-components";
import { useState } from "react";

export default function Perguntas({setErrado, setQuase, setZap, errado ,quase, zap, respondidosTotais, setRespondidosTotais}) {
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    const [cardFrontOculto, setCardFrontOculto] = useState(true);
    const [cardBackOculto, setCardBackOculto] = useState(true);
    const [perguntaOculta, setPerguntaOculta] = useState(false);
    const [respondidos, setRespondidos] = useState([]);


    const [cardAtual, setCardAtual] = useState(100);

    function revelarCard(cardClicado){
        setCardFrontOculto(false);
        setCardBackOculto(true);
        setPerguntaOculta(true);
        setCardAtual(cardClicado)
    }

    function revelaResposta(){
        setCardFrontOculto(true);
        setCardBackOculto(false);
    }
    function terminaCard(cardAtual){
        setPerguntaOculta(false);
        setCardBackOculto(true);
        setRespondidosTotais(respondidosTotais+1);
        setRespondidos([...respondidos, cardAtual]); //aqui vai ser usado para desabilitar o onclick
    }

    function sabia(cardAtual, situacao){
        if(situacao==="errei") setErrado([...errado, cardAtual]);
        if(situacao==="quase") setQuase([...quase, cardAtual]);
        if(situacao==="acertei") setZap([...zap, cardAtual]);
        terminaCard(cardAtual);
    }
    return (

        <PerguntasCards>
            {cards.map((card, i) => <PerguntasIndividuais 
            key={i+1} 
            question={card.question} 
            answer = {card.answer} 
            numero={i+1} 
            revelarCard={revelarCard} 
            cardFrontOculto={cardFrontOculto}
            revelaResposta={revelaResposta}
            cardBackOculto={cardBackOculto}
            perguntaOculta={perguntaOculta}
            sabia={sabia}
            cardAtual={cardAtual}
            respondidos={respondidos}
            />)
            }
        </PerguntasCards>

    )
}

function PerguntasIndividuais({question, answer, numero, revelarCard, cardFrontOculto, revelaResposta, 
    cardBackOculto, perguntaOculta, sabia, cardAtual, respondidos}) {
    return (
       <>
            <Pergunta data-test="flashcard" perguntaOculta={perguntaOculta} cardAtual={cardAtual} numero={numero}>
                <p data-test="flashcard-text">Pergunta {numero}</p>
                <button disabled={respondidos.includes(numero) ? true : false} data-test="play-btn" onClick={()=>revelarCard(numero)}><img src={play} alt="Botão de ver pergunta" /></button>
            </Pergunta>
            <Card>
                <CardFront  cardFrontOculto={cardFrontOculto} cardAtual={cardAtual} numero={numero}>
                    <p data-test="flashcard-text">{question}</p>
                    <button data-test="turn-btn" onClick={revelaResposta}><img src={girar} alt="botão de girar o card"></img></button>

                </CardFront>
                <CardBack cardBackOculto={cardBackOculto} cardAtual={cardAtual} numero={numero}>
                    <p data-test="flashcard-text">{answer}</p>
                    <Botoes>
                        <Errou data-test="no-btn"  onClick={()=>sabia(numero, "errei")}>Não lembrei</Errou>
                        <Quase data-test="partial-btn"  onClick={()=>sabia(numero, "quase")}>Quase não lembrei</Quase>
                        <Certo data-test="zap-btn"  onClick={()=>sabia(numero, "acertei")}>Zap!</Certo>
                    </Botoes>
                </CardBack>
            </Card>
        </>
    )
}

const PerguntasCards = styled.div`
    margin-top: 153px;
    margin-bottom: 100px;
    button{
        border:none;
        background-color: tra;
    }
`
const Pergunta = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    display: ${({perguntaOculta, cardAtual, numero}) => (perguntaOculta && cardAtual === numero) && "none"};
    img {
        width: 20px;
        height: 23px;
    }
    button{
        background-color: transparent;
    }
`

const Card = styled.div`
    p {
    padding-top: 18px;
    padding-left: 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    }
    
`

const CardFront = styled.div` 
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    margin-bottom: 25px;
    display: ${({cardFrontOculto, cardAtual, numero}) => (cardAtual ===numero && cardFrontOculto===false) ? "" : "none"}; //Verifica quando o botão é clicado é virar

    img {
        width: 30px;
        height: 20px;
        position: absolute;
        right: 15px;
        bottom: 6px;
    }
`

const CardBack = styled.div`
    width: 300px;
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: ${({cardBackOculto, cardAtual, numero}) => (cardAtual ===numero && cardBackOculto===false) ? "" : "none"};
    button{
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
}
`

const Botoes = styled.div` 
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    margin:12px
`

const Errou = styled.button`
    background: #FF3030;
    color: #FFFFFF;
`
const Quase = styled.button`
    background: #FF922E;
    color: #FFFFFF;
`

const Certo = styled.button`
    background: #2FBE34;
    color: #FFFFFF
`