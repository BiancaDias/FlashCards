import styled from "styled-components";
import iconeErrado from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import parabens from "../assets/party.png"
import putz from "../assets/sad.png"

export default function Concluidos({ respondidosTotais, arrayDeIconesRespondidos }) {

    let titulo = "";
    let mensagem = "";
    let imagem = "";
    if (arrayDeIconesRespondidos.length === 8) {
        if (arrayDeIconesRespondidos.includes(iconeErrado)) {
            mensagem = "Ainda faltam alguns... Mas não desanime!"
            titulo = "Puts..."
            imagem = putz;
        }
        else {
            mensagem = "Você não esqueceu de nenhum flashcard!"
            titulo = "Parabéns!"
            imagem = parabens;
        }
    }
    return (
        <Rodape data-test="footer">

            <TextoFinal >
                <Titulo data-test="finish-text">
                    {imagem !== "" && <img src={imagem} alt="texto final" />}
                    <h2>{titulo}</h2>
                </Titulo>
                <p>{mensagem}</p>
            </TextoFinal>

            <p>{respondidosTotais}/8 CONCLUÍDOS</p>
            <div>
                {arrayDeIconesRespondidos.map(icone => <img data-test={icone === iconeErrado ? "no-icon" : icone === iconeQuase ? "partial-icon" : "zap-icon"} src={icone} alt={icone} />)}
            </div>
        </Rodape>
    )
}

const Rodape = styled.footer`
  width: 100%;
  min-height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  padding-bottom: 15px;
  div{
    max-width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px
  }
  img{
    width: 23px;
    height: 23px;
    margin-left: 5px;
    margin-top: 7px;
    /* margin-bottom: 15px; */
  }
`

const TextoFinal = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        margin-top: 8px;
        margin-bottom: 14px;
    }
`

const Titulo = styled.div`
    display: flex;
    margin-top: 16px;
`