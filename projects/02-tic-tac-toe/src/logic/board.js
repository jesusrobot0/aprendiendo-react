import { WINNER_COMBOS } from '../constants'
export const checkWinnerFrom = (boardToCheck) => {
  // Revisa las combinaciones ganadoras para ver si x u o ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (boardToCheck) => {
  // Revisa que no queden espacios vacíos en el tablero
  return boardToCheck.every((square) => square !== null)
}
