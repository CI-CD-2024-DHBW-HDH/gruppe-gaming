import { Field, invertPlayer, getBlanks, newBoard, isPlayer, won } from "./game";

describe("invert player", () => {
    it("invert player1 to player2", () => {
        const result: Field = invertPlayer(Field.PLAYER1);
        expect(result).toBe(Field.PLAYER2);
    });
    it("invert player2 to player1", () => {
        const result: Field = invertPlayer(Field.PLAYER2);
        expect(result).toBe(Field.PLAYER1);
    });
    it("return empty field as empty", () => {
        const result: Field = invertPlayer(Field.EMPTY);
        expect(result).toBe(Field.EMPTY);
    });
});

describe('getBlanks', () => {
    it('should return indices of empty fields', () => {
        const board: Field[] = [Field.PLAYER1, Field.EMPTY, Field.PLAYER2, Field.EMPTY];
        const expectedIndices = [1, 3];
        expect(getBlanks(board)).toEqual(expectedIndices);
    });

    it('should return an empty array if there are no empty fields', () => {
        const board: Field[] = [Field.PLAYER1, Field.PLAYER2, Field.PLAYER1, Field.PLAYER2];
        expect(getBlanks(board)).toEqual([]);
    });

    it('should return an empty array if the board is empty', () => {
        const board: Field[] = [];
        expect(getBlanks(board)).toEqual([]);
    });
});

describe('newBoard', () => {
    it('should return a new board with all fields empty', () => {
        const board = newBoard();
        expect(board).toHaveLength(9);
        expect(board.every(field => field === Field.EMPTY)).toBe(true);
    });
});

describe('isPlayer', () => {
    it('should return true for PLAYER1 and PLAYER2', () => {
        expect(isPlayer(Field.PLAYER1)).toBe(true);
        expect(isPlayer(Field.PLAYER2)).toBe(true);
    });

    it('should return false for EMPTY and other values', () => {
        expect(isPlayer(Field.EMPTY)).toBe(false);
    });
});

describe('won', () => {
    it('should return the winning player if there is a horizontal win', () => {
        const board: Field[] = [Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY];
        expect(won(board)).toEqual(Field.PLAYER1);
    });

    it('should return the winning player if there is a vertical win', () => {
        const board: Field[] = [Field.PLAYER2, Field.EMPTY, Field.EMPTY, Field.PLAYER2, Field.EMPTY, Field.EMPTY, Field.PLAYER2, Field.EMPTY, Field.EMPTY];
        expect(won(board)).toEqual(Field.PLAYER2);
    });

    it('should return the winning player if there is a diagonal win', () => {
        const board: Field[] = [Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.PLAYER1];
        expect(won(board)).toEqual(Field.PLAYER1);
    });

    it('should return Field.EMPTY if there is no winner', () => {
        const board: Field[] = [Field.PLAYER1, Field.PLAYER2, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY];
        expect(won(board)).toEqual(Field.EMPTY);
    });
});