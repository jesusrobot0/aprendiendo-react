import { useState } from "react";
import conffeti from "canvas-confetti";
import { WinnerModal, Board } from "./components";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { saveGameToStorage, resetGameStorage } from "./logic/storage";
import { TURNS } from "./constants";

const initialBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return initialBoard;
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  // null = no hay ganador ; false = empate ; X = X ganador : O = O ganador
  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem("winner");
    if (winnerFromStorage === "null" || winnerFromStorage === "false") {
      return JSON.parse(winnerFromStorage);
    }
    return winnerFromStorage;
  });

  const resetGame = () => {
    setBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };

  const updateBoard = (index) => {
    // Si hay algo en esta posición o hay un ganador no la actualices
    if (board[index] || winner) return;
    // Actualiza el board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Revisa si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    // Guardar partida
    saveGameToStorage({ board: newBoard, turn: newTurn, winner: newWinner });
    if (newWinner) {
      conffeti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Empate
    }
  };

  return (
    <main className="board">
      <header>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>
      </header>
      <Board board={board} turn={turn} onUpdateBoard={updateBoard} />
      <WinnerModal winner={winner} onResetGame={resetGame} />
    </main>
  );
}

export default App;
