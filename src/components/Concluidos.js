import styled from "styled-components";

export default function Concluidos({respondidosTotais}){
    return(
        <Rodape data-test="footer">
            <p>{respondidosTotais}/8 CONCLUÍDOS</p>
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
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`