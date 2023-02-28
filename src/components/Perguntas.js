import girar from "../assets/seta_virar.png"
import play from "../assets/seta_play.png"

export default function Perguntas() {
    return (
        <>
            <div className="Perguntas">
                <div className="pergunta">
                    <p>Pergunta 1</p>
                    <img src={play} alt="Botão de ver pergunta"/>
                </div>
            </div>
            <div className="card">
                <div className="card-front">
                    <p>O que é JSX?</p>
                    <button><img src={girar} alt="botão de girar o card"></img></button>

                </div>
                <div className="card-back">
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <div className="botoes">
                        <button className="errou">Não lembrei</button>
                        <button className="quase">Quase não lembrei</button>
                        <button className="certo">Zap!</button>
                    </div>
                </div>
            </div>
        </>
    )
}