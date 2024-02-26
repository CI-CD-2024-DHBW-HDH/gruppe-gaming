import { Field } from "../game";
import { randomMove, winningMove } from "./bot";

// the easy bot plays a winning move, if it can
// otherwise, it plays a random move
export function easyMove(board: Field[], own: Field): number {
  let move = winningMove(board, own);
  if (move !== -1) {
    return move;
  } else {
    let freeFields = [];
    for (let i = 0; i<board.length; i++){
      if (board[i] === Field.EMPTY) {
        freeFields.push(i);
      }
    }
    const rndInt = Math.floor(Math.random() * freeFields.length)
    return freeFields[rndInt]
  }
}
