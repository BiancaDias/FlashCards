import Topo from "./Topo"
import Perguntas from "./Perguntas"
import Concluidos from "./Concluidos"
import { useState } from "react";
import styled from "styled-components";

export default function FlashCards({iniciar}) {
  const [errado, setErrado] = useState([]);
  const [quase, setQuase] = useState([]);
  const [zap, setZap] = useState([]);
  const [respondidosTotais, setRespondidosTotais] = useState(0)
  const [arrayDeIconesRespondidos, setArrayDeIconesRespondidos] = useState([]);

  return (
    <AreaFlashCards iniciar={iniciar}>
      <Topo/>
      <Perguntas 
        setErrado={setErrado} 
        setQuase={setQuase} 
        setZap={setZap} 
        errado={errado} 
        quase={quase} 
        zap={zap} 
        respondidosTotais ={respondidosTotais} 
        setRespondidosTotais = {setRespondidosTotais}
        arrayDeIconesRespondidos={arrayDeIconesRespondidos}
        setArrayDeIconesRespondidos={setArrayDeIconesRespondidos}
      />
      <Concluidos respondidosTotais ={respondidosTotais} arrayDeIconesRespondidos={arrayDeIconesRespondidos}/>
    </AreaFlashCards>
  );
}

const AreaFlashCards = styled.div`
    display: ${({iniciar}) => (iniciar === true) ? "initial" : "none"};
`