import styled from "styled-components"

export default function Rules() {
  return (
    <RuleContainer>
      <h1>How to play dice Game</h1>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on dice image</p>
        <p>On click on dice if selected number is equal to the dice number you will get some point as dice</p>
        <p>If you get wrong guess then 2 point will be  dedcuted</p>
      </div>
    </RuleContainer>
  )
}

 const RuleContainer= styled.div`
    
    width: 900px;
    margin: 30px auto;
    display: flex;
    align-items:start;
    justify-content: center;
    flex-direction: column;
    text-transform: capitalize;
    padding: 5px 10px;
    background-color: #f7dede;

    /* h1,p{
        margin-left: 70px;
    } */

`;