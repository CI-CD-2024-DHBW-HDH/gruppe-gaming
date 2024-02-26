import { Field } from "../game";
import { winningMove } from "./bot";
import { easyMove } from "./easy";
import { pettyMove, mediumMove } from "./medium";

describe("winning move", () => {
  it("return -1 if no winning move", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = winningMove(board, Field.PLAYER1);
    expect(result).toBe(-1);
  });
  it("return 2 if winning move", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = winningMove(board, Field.PLAYER1);
    expect(result).toBe(2);
  });
});

describe("bot easy move", () => {
  it("return winning move if possible", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = easyMove(board, Field.PLAYER1);
    expect(result).toBe(2);
  });
  it("return random move if no winning move", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = easyMove(board, Field.PLAYER1);
    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(9);
  });
});

describe("bot petty move", () => {
  it("return winning move if possible", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = pettyMove(board, Field.PLAYER2);
    expect(result).toBe(2);
  });
  it("return random move if no winning move", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = pettyMove(board, Field.PLAYER1);
    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(9);
  });
});

describe("bot medium move", () => {
  it("return winning move if possible", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = mediumMove(board, Field.PLAYER2);
    expect(result).toBe(2);
  });
  it("return winning move if possible", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBe(4);
  });
  it("return random move if no winning move", () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const result: number = mediumMove(board, Field.PLAYER1);
    expect(result).toBeGreaterThan(-1);
    expect(result).toBeLessThan(9);
  });
});
