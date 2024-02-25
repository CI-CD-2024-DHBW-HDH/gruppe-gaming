<script lang="ts">
  import {
    Field,
    getBlanks,
    invertPlayer,
    Outcome,
    Player,
  } from "../logic/game";
  import { createEventDispatcher } from "svelte";

  export let board: Field[];
  export let fieldToString: (arg0: Field) => string;
  export let player: Player;
  export let enemy: Player;

  let currentPlayer: Field = Field.PLAYER1 | Field.PLAYER2;
  currentPlayer = Field.PLAYER1;

  const dispatch = createEventDispatcher();

  function getCurrentPlayer(): Player {
    if (currentPlayer === player.field) return player;
    return enemy;
  }

  function onClickHandler(index: number) {
    if (!setField(index, getCurrentPlayer().field)) return;
    currentPlayer = invertPlayer(currentPlayer);
    if (!getCurrentPlayer().isHuman()) {
      setField(getCurrentPlayer().move(board), getCurrentPlayer().field);
      currentPlayer = invertPlayer(currentPlayer);
    }
  }

  function setField(index: number, value: Field): boolean {
    if (board[index] !== Field.EMPTY) return false;
    if (new Outcome(board).finished) return false;
    board[index] = value;
    board = board;
    return true;
  }

  $: {
    let outcome = new Outcome(board);
    if (outcome.finished) {
      dispatch<"finished">("finished", outcome);
    }
  }

  $: {
    if (getBlanks(board).length === 9) {
      currentPlayer = Field.PLAYER1;
      if (!getCurrentPlayer().isHuman()) {
        setField(getCurrentPlayer().move(board), getCurrentPlayer().field);
        currentPlayer = Field.PLAYER2;
      }
    }
  }
</script>

<div id="grid">
  {#each board as field, index}
    <div
      class="field"
      id={index.toString()}
      on:click={() => onClickHandler(index)}
      on:keydown={() => onClickHandler(index)}
    >
      {fieldToString(field)}
    </div>
  {/each}
</div>

<style>
  #grid {
    height: 50%;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: var(--primary);
    position: relative;
    border-radius: 7.5%;
    box-shadow: 0 0 20px var(--secondaryAccent);
  }
  .field {
    padding: 0;
    margin: 0;
    --border: 0.25rem solid var(--primaryAccent); /*border variable*/
    font-size: 300%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Comic Sans MS";
    cursor: pointer;
    user-select: none;
  }
  .field:nth-child(-n + 3) {
    /*first row*/
    border-bottom: var(--border);
  }
  .field:nth-child(n + 4):nth-child(-n + 6) {
    /*second row*/
    border-bottom: var(--border);
    border-top: var(--border);
  }
  .field:nth-child(n + 7) {
    /*last row*/
    border-top: var(--border);
  }
  .field:nth-child(3n + 1) {
    /*first column*/
    border-right: var(--border);
  }
  .field:nth-child(3n + 2) {
    /*second column*/
    border-right: var(--border);
    border-left: var(--border);
  }
  .field:nth-child(3n) {
    /*last column*/
    border-left: var(--border);
  }
</style>
