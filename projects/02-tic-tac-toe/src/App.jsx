import { useState } from 'react'
import conffeti from 'canvas-confetti'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { saveGameToStorage, resetGameStorage } from './logic/storage'
import { TURNS } from './constants'

function App() {
  const initialBoard = Array(9).fill(null)
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return initialBoard
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null = no hay ganador ; false = empate ; X = X ganador : O = O ganador
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(initialBoard)
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    // Si hay algo en esta posición o hay un ganador no la actualices
    if (board[index] || winner) return
    // Actualiza el board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar partida
    saveGameToStorage({ board: newBoard, turn: newTurn })
    // Revisa si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      conffeti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} onUpdateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} onResetGame={resetGame} />
    </main>
  )
}

export default App
