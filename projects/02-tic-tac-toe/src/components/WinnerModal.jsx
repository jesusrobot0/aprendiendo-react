import PropTypes from 'prop-types'
import { Square } from './Square'

export function WinnerModal({ winner, onResetGame }) {
  if (winner === null) return null
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? 'Empate' : 'Gano:'}</h2>
        <header>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={onResetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.any,
  onResetGame: PropTypes.func.isRequired,
}
