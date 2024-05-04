/* eslint-disable react/prop-types */
import styled from "styled-components"

export const TotalScore = ({totalScore}) => {
  return (
    <ScoreContainer>
        <h1>{totalScore}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

const ScoreContainer= styled.div`

    width:auto;
    height:auto;
    max-width:150px;
    padding: 0 20px;
    text-align: center;
    /* background-color:red; */
    text-transform: uppercase;
    
    h1{
        font-size: 4rem;
        line-height: 4rem;
    }

`;