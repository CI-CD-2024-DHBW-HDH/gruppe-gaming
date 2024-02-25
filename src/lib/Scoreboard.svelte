<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Player } from "../logic/game";

  export let player: Player;
  export let enemy: Player;

  let dispatch = createEventDispatcher();

  function toggle() {
    dispatch<"switch">("switch");
  }
</script>

<div id="scoreboard">
  <div id="player1" class="player">
    <i
      >{#if player.isHuman()}
        👨‍💻
      {:else}
        🤖
      {/if}</i
    >
    {player.score}
  </div>
  <div id="versus" on:click={() => toggle()} on:keydown={() => toggle()}>
    🆚
  </div>
  <div id="player2" class="player">
    {enemy.score}
    <i
      >{#if enemy.isHuman()}
        👨‍💻
      {:else}
        🤖
      {/if}</i
    >
  </div>
</div>

<style>
  #scoreboard {
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  #versus {
    font-size: 2rem;
    width: 3rem;
    user-select: none;
    cursor: pointer;
    text-shadow: 0 0 10px grey;
    justify-self: center;
  }
  .player > i {
    text-shadow: 0 0 10px grey;
  }
  .player:last-child {
    text-align: right;
  }
</style>
