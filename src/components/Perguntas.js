import girar from "../assets/seta_virar.png"
import play from "../assets/seta_play.png"
import iconeErrado from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import iconeZap from "../assets/icone_certo.png"
import styled from "styled-components";
import { useState } from "react";

export default function Perguntas({ setErrado, setQuase, setZap, errado, quase, zap, respondidosTotais, setRespondidosTotais }) {
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

    function revelarCard(cardClicado) {
        setCardFrontOculto(false);
        setCardBackOculto(true);
        setPerguntaOculta(true);
        setCardAtual(cardClicado)
    }

    function revelaResposta() {
        setCardFrontOculto(true);
        setCardBackOculto(false);
    }
    function terminaCard(cardAtual) {
        setPerguntaOculta(false);
        setCardBackOculto(true);
        setRespondidosTotais(respondidosTotais + 1);
        setRespondidos([...respondidos, cardAtual]); //aqui vai ser usado para desabilitar o onclick
    }

    function sabia(cardAtual, situacao) {
        if (situacao === "errei") setErrado([...errado, cardAtual]);
        if (situacao === "quase") setQuase([...quase, cardAtual]);
        if (situacao === "acertei") setZap([...zap, cardAtual]);
        terminaCard(cardAtual);
    }

    const layout = [];
    cards.forEach((card, i) => {
        //caso tenha sido clicado
        if (respondidos.includes(i + 1)) {
            if (errado.includes(i + 1)) {
                layout.push(<PerguntaRespondidaErrada data-test="flashcard" perguntaOculta={perguntaOculta} cardAtual={cardAtual} numero={i + 1}>
                    <p data-test="flashcard-text">Pergunta {i + 1}</p>
                    <img data-test="no-icon" src={iconeErrado} alt="indicacao de errado" />
                </PerguntaRespondidaErrada>)
            }
            if (quase.includes(i + 1)) {
                layout.push(<PerguntaRespondidaQuase data-test="flashcard" perguntaOculta={perguntaOculta} cardAtual={cardAtual} numero={i + 1}>
                    <p data-test="flashcard-text">Pergunta {i + 1}</p>
                    <img data-test="partial-icon" src={iconeQuase} alt="Botão de ver pergunta" />
                </PerguntaRespondidaQuase>)
            }
            if (zap.includes(i + 1)) {
                layout.push(<PerguntaRespondidaCerta data-test="flashcard" perguntaOculta={perguntaOculta} cardAtual={cardAtual} numero={i + 1}>
                    <p data-test="flashcard-text">Pergunta {i + 1}</p>
                    <img data-test="zap-icon" src={iconeZap} alt="Botão de ver pergunta" />
                </PerguntaRespondidaCerta>)
            }
        }
        //caso em que não foi clicado ainda
        if (!respondidos.includes(i + 1) && cardAtual !== i + 1) {
            layout.push(<Pergunta data-test="flashcard" perguntaOculta={perguntaOculta} cardAtual={cardAtual} numero={i + 1}>
                <p data-test="flashcard-text">Pergunta {i + 1}</p>
                <button data-test="play-btn" onClick={() => revelarCard(i + 1)}><img src={play} alt="Botão de ver pergunta" /></button>
            </Pergunta>)
        }


        //se foi clicado
        if (cardAtual === i + 1 && cardFrontOculto === false) {
            layout.push(
                <Card data-test="flashcard">
                    <CardFront cardFrontOculto={cardFrontOculto} cardAtual={cardAtual} numero={i + 1}>
                        <p data-test="flashcard-text">{card.question}</p>
                        <button data-test="turn-btn" onClick={revelaResposta}><img src={girar} alt="botão de girar o card"></img></button>
                    </CardFront>
                </Card>)
        }

        //se cliquei em revelar resposta
        if (cardAtual === i + 1 && cardBackOculto === false) {
            layout.push(
                <Card data-test="flashcard">
                    <CardBack cardBackOculto={cardBackOculto} cardAtual={cardAtual} numero={i + 1}>
                        <p data-test="flashcard-text">{card.answer}</p>
                        <Botoes>
                            <Errou data-test="no-btn" onClick={() => sabia(i + 1, "errei")}>Não lembrei</Errou>
                            <Quase data-test="partial-btn" onClick={() => sabia(i + 1, "quase")}>Quase não lembrei</Quase>
                            <Certo data-test="zap-btn" onClick={() => sabia(i + 1, "acertei")}>Zap!</Certo>
                        </Botoes>
                    </CardBack>
                </Card>
            )
        }
    })

    return (

        <PerguntasCards>
            {layout}
        </PerguntasCards>

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
    display: ${({ perguntaOculta, cardAtual, numero }) => (perguntaOculta && cardAtual === numero) && "none"};
    img {
        width: 20px;
        height: 23px;
    }
    button{
        background-color: transparent;
    }
`

const PerguntaRespondidaErrada = styled(Pergunta)`
    text-decoration-line: line-through;
    color: #FF3030;
    img{
        width: 23px;
        height: 23px;
    }
`
const PerguntaRespondidaQuase= styled(Pergunta)`
    text-decoration-line: line-through;
    color: #FF922E;
    img{
        width: 23px;
        height: 23px;
    }
`
const PerguntaRespondidaCerta= styled(Pergunta)`
    text-decoration-line: line-through;
    color: #2FBE34;
    img{
        width: 23px;
        height: 23px;
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
    display: ${({ cardFrontOculto, cardAtual, numero }) => (cardAtual === numero && cardFrontOculto === false) ? "" : "none"}; //Verifica quando o botão é clicado é virar

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
    display: ${({ cardBackOculto, cardAtual, numero }) => (cardAtual === numero && cardBackOculto === false) ? "" : "none"};
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