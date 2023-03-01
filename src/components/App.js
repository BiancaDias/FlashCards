import GlobalStyle from "../css/globalStyles";
import Topo from "./Topo"
import Perguntas from "./Perguntas"
import Concluidos from "./Concluidos"
import { useState } from "react";
function App() {
  const [errado, setErrado] = useState(0);
  const [quase, setQuase] = useState(0);
  const [zap, setZap] = useState(0);
  return (
    <div className="App">
      <GlobalStyle/>
      <Topo/>
      <Perguntas setErrado={setErrado} setQuase={setQuase} setZap={setZap} errado={errado} quase={quase} zap={zap}/>
      <Concluidos/>
    </div>
  );
}

export default App;
