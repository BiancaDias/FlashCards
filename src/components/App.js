import GlobalStyle from "../css/globalStyles";
// import Topo from "./Topo"
// import Perguntas from "./Perguntas"
// import Concluidos from "./Concluidos"
import { useState } from "react";
import BoasVindas from "./BoasVindas";
import FlashCards from "./FlashCards";
export default function App() {
  const [iniciar, setIniciar] = useState(false);
  return (
    <div className="App">
      <GlobalStyle/>
      <BoasVindas setIniciar = {setIniciar} iniciar={iniciar}/>
      <FlashCards iniciar={iniciar}/> 
    </div>
  );
}

