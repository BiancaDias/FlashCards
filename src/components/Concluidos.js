import styled from "styled-components";
import iconeErrado from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import iconeZap from "../assets/icone_certo.png"

export default function Concluidos({respondidosTotais, arrayDeIconesRespondidos}){
    return(
        <Rodape data-test="footer">
            <p>{respondidosTotais}/8 CONCLUÍDOS</p>
            <div>
                {arrayDeIconesRespondidos.map(icone => <img data-test={icone === iconeErrado ? "no-icon" : icone === iconeQuase ? "partial-icon" : "zap-icon"} src={icone} alt={icone} />)}
            </div>
        </Rodape>
    )
}

const Rodape = styled.footer`
  width: 100%;
  height: 70px;
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
  div{
    max-width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between
    margin-top: 6px
  }
  img{
    width: 23px;
    height: 23px;
    margin-left: 5px;
  }
`