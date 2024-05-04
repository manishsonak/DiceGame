import DiceNumbers from "./DiceNumbers";
import RoleDice from "./RoleDice";
import { TotalScore } from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";

export default function GamePlay() {
  const [totalScore, setTotalScore] = useState(0);
  const [SelectNumber, setSelectNumber] = useState();

  const [currentnumber, setcurrentnumber] = useState(1);
  const [error, seterror] = useState("");
  const [showRule, setShowRule] = useState(false);

  const GenerateNumber = () => {
   let number= Math.floor(Math.random() * 6) + 1;

    //  console.log(number);
     return number;
  };

  const SelectTheNumber = (value) => {

    setSelectNumber(value);
    seterror("");

    
  };
  const RollDice = () => {
    
    if (SelectNumber === undefined) {
      seterror("You not have  selected any number");
      return;
      // alert("Please select the number of dice you");
    } 
   
    let Result = GenerateNumber();
    setcurrentnumber(Result);

    //  console.log(Result);
 if (SelectNumber === Result) {
      setTotalScore((prev) => prev + SelectNumber);
    } else {
      setTotalScore((prev) => prev);
    }

    setSelectNumber(undefined);
  };

  const ResetScore = () => {
    setTotalScore(0);
  };

  const RulesShow = () => {
    if (showRule == true) {
      setShowRule(false);
    } else {
      setShowRule(true);
    }
  };

  return (
    <>
      <Container>
        <TotalScore totalScore={totalScore} />
        <div className="container">
          <div>
            <p className="error">{error}</p>
          </div>

          <div className="number">
            <DiceNumbers
              SelectNumber={SelectNumber}
              setSelectNumber={SelectTheNumber}
            />
          </div>
          <div className="content">Select a Number</div>
        </div>
      </Container>

      <RoleDice
        currentnumber={currentnumber}
        RollDice={RollDice}
        click={ResetScore}
        RuleClick={RulesShow}
        show={showRule}
      />

      {showRule && <Rules />}
    </>
  );
}

const Container = styled.div`
  padding-top: 50px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
  }
  .error {
    color: #ff3c6b;
    margin: 5px auto;
    text-transform: capitalize;
  }
  .number {
    margin: 2px 0;
  }
  .content {
    font-weight: 800;
  }
`;
