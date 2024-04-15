import { TURNS } from "../constants";
import { Square } from "./Square";

export const Board = ({ board, turn, onUpdateBoard }) => {
  return (
    <>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} onUpdateBoard={onUpdateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </>
  );
};
