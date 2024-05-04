// import styled from "styled-components";
import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";
import { useState } from 'react';



function App() {

  const [IsGamePlay, setIsGamePlay] = useState(false)

  const GameStarted =()=>{

    setIsGamePlay((prev)=>!prev)
  }

  return (
    <>
    {IsGamePlay? <GamePlay/>: <StartGame isPlay={GameStarted}/>}
    

     
    </>
  )
}

export default App

//This is css of this component
// const Button = styled.button `
//   background-color: black;
//   color: white;
//   padding: .6rem 2rem;
//   font-size: 16px;
//   border-radius: 5px;


// `;