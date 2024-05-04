/* eslint-disable react/prop-types */
// import { useState } from "react";
import styled from "styled-components"

export default function DiceNumbers({setSelectNumber,SelectNumber}) {

    const arrnumber=[1,2,3,4,5,6];

    
    // console.log(SelectNumber);
    return (
      
      <div>
    {  arrnumber.map((value,i)=>(
        <DiceNumber 
        isselected={value === SelectNumber}
        onClick={()=>{setSelectNumber(value)}}  
        key={i}>
           {value}
        </DiceNumber>
    ))}
    </div>
       
  );
}

const DiceNumber=styled.div`

max-width:auto;
margin: 0 8px;
padding: .3rem 1rem;
border: 1px solid black;
display: inline-block;
background-color: ${(props) => props.isselected ? "black" : "white"};
color: ${(props) => props.isselected ? "white": "black"};
cursor: pointer;
`;