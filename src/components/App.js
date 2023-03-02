import GlobalStyle from "../css/globalStyles";
import Topo from "./Topo"
import Perguntas from "./Perguntas"
import Concluidos from "./Concluidos"
import { useState } from "react";
function App() {
  const [errado, setErrado] = useState([]);
  const [quase, setQuase] = useState([]);
  const [zap, setZap] = useState([]);
  const [respondidosTotais, setRespondidosTotais] = useState(0)
  return (
    <div className="App">
      <GlobalStyle/>
      <Topo/>
      <Perguntas setErrado={setErrado} setQuase={setQuase} setZap={setZap} errado={errado} quase={quase} zap={zap} respondidosTotais ={respondidosTotais} setRespondidosTotais = {setRespondidosTotais}/>
      <Concluidos respondidosTotais ={respondidosTotais}/>
    </div>
  );
}

export default App;
