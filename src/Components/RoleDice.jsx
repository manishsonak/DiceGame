/* eslint-disable react/prop-types */
// import { useState } from "react";
import styled from "styled-components"
export default function RoleDice({currentnumber,RollDice,click,show,RuleClick}) {
    

   

  return (
    <DiceRole>
        <img src={`../dice/dice_${currentnumber}.png`} alt="../dice/dice_1" onClick={RollDice} />
        <p>Click on the dice to roll</p>
        <button className="reset" onClick={click}>Reset Score</button>
        <button onClick={RuleClick}>{show?"Hide ":"Show "}Rule</button>
    </DiceRole>
  )
}

const  DiceRole = styled.div`
    width:1200px;
    margin:auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        cursor: pointer;
    }
    
    p{
        font-size: 1.5rem;
    }
    
    button{
        width: 250px;
        height: 36px;
        padding: 0 20px;
        margin:10px;
        text-align: center;
        cursor: pointer;
        background-color:black;
        color: white;
        font-size: 1.2rem;
        border-radius: 5px;

        &:hover{
            transform: scale(.99);
        }
    
    }
    .reset{
        background-color: white;
        color:black;

        /* &:hover {
            background-color: black;
            color: white;
        } */
    }
`;
