/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function StartGame({ isPlay }) {
  return (
    <Container>
      <img src="../image/dices.png" alt="" />
      <div className="game-content">
        <h1>Dice Game</h1>
        <Button onClick={isPlay}>Play Game</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  margin: 0 auto;

.game-content {

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    h1{
        font-size: 96px;
    }
}

img{
    width: 50%;
}

`;

const Button = styled.button`
  background-color: black;
  color: white;
  min-width: 200px;
  max-width: 250px;
  padding: 0.6rem 2rem;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: all  .3s ease-in-out;

  &:hover {

    background-color: white;
    color: black;
    border: 2px solid black;
    font-size: 16px;
    transition: all  .3s ease-in-out;
    cursor: pointer;

  }
`;
