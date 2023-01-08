import { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetBtn from "./components/ResetBtn";
import './App.css'

function App() {
  //   Winner Conditions

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const[gameOver,setGameOver] = useState(false)

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  // Check Winner

  const checkWinner = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  // Reset game

  const resetGame = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  };

  return (
    <div className="App">

     <h1 className="heading"> Play and Enjoy the <span> Game! </span></h1>

      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetGame :  handleBoxClick} />
       <ResetBtn resetGame={resetGame}/>
    </div>
  );
}

export default App;
