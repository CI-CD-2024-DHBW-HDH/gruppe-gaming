import { getBlanks, invertPlayer, Field } from "../game";
import { randomMove, winningMove } from "./bot";

// the medium bot plays a wiining move, if it can
// or blocks the opponent from winning
// or plays the center field if it can
// otherwise it plays a random move

export function mediumMove(board: Field[], own: Field): number {
  if (winningMove(board, own) != -1) {
    return winningMove(board, own)
  }

  return pettyMove(board, own)
}

// this bot just tries to block a win
// otherwise it plays a random move
export function pettyMove(board: Field[], own: Field): number {
  var blanks = getBlanks(board)
  var enemy
  if (own == Field.PLAYER1) {
    enemy = Field.PLAYER2
  } 
  else {
    enemy = Field.PLAYER1
  } 
  
  if (winningMove(board, enemy) != -1) {
    return winningMove(board, enemy)
  }
  if (board[4] == Field.EMPTY) {
    return 4
  }

  return blanks[randomMove(blanks.length)]
}
