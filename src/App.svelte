<script lang="ts">
  import Board from "./lib/Board.svelte";
  import Scoreboard from "./lib/Scoreboard.svelte";
  import Settings from "./lib/Settings.svelte";
  import ThemeSelector from "./lib/ThemeSelector.svelte";
  import { Field, Game, Mode, newBoard, Outcome } from "./logic/game";
  import type { Theme } from "./logic/theme";

  let board: Field[] = newBoard();

  let game = new Game();
  const playerSymbol = "❌";
  const enemySymbol = "⭕";

  let fieldToString = (f: Field) => {
    switch (f) {
      case Field.EMPTY:
        return "";
      case Field.PLAYER1:
        return playerSymbol;
      case Field.PLAYER2:
        return enemySymbol;
    }
  };

  function finished(event: CustomEvent<Outcome>) {
    if (!event.detail.isDraw()) {
      game.addWin(event.detail.winner);
      game = game;
    }
    setTimeout(() => (board = newBoard()), 1000);
  }

  function switchPlayer() {
    board = newBoard();
    game.switchSides();
    game = game;
  }

  function themeChanged({ detail }: { detail: Theme }) {
    let elements = Object.entries(detail);
    for (let e of elements) {
      if (typeof e[1] === "string") {
        document.documentElement.style.setProperty(`--${e[0]}`, `${e[1]}`);
      }
    }
  }

  function modeChanged({ detail }: { detail: Mode }) {
    game.updateMode(detail);
    game = game;
    board = newBoard();
  }
</script>

<header>
  <Settings on:change={modeChanged} />
  <Scoreboard {...game} on:switch={() => switchPlayer()} />
  <ThemeSelector on:changed={themeChanged} />
</header>
<main>
  <Board {board} {fieldToString} {...game} on:finished={finished} />
</main>

<style>
  :global(body) {
    background-color: var(--background);
  }
  header {
    width: 100vw;
    height: 10%;
    display: flex;
    flex-direction: row;
  }
  main {
    width: 100%;
    height: 85%;
    display: flex;
    place-items: center;
    justify-content: center;
  }
</style>
