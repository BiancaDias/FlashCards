import logo from "../assets/logo.png"
import styled from "styled-components";

export default function Topo() {
    return (
      <ContainerTopo>
        <ParteDeCima>
            <img src={logo} alt="logo raio" />
            <h1>ZapRecall</h1>
        </ParteDeCima>
      </ContainerTopo>
    )
}
const ContainerTopo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: black;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #FB6B6B;
`
const ParteDeCima = styled.div`
 display: flex;
  justify-content: center;
  width: 250px;
  height: 61px;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 35px;
  
  img {
  width: 52px;
  height: 60px;
}

h1 {
  font-family: 'Righteous', cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;
  color: #FFFFFF;
  transform: rotate(0.58deg);
}
`