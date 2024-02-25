<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Mode } from "../logic/game";

  const dispatch = createEventDispatcher();

  function bubble(e: Event) {
    let value = (e.target as HTMLSelectElement).value;
    let mode = Mode.EASY;
    switch (value) {
      case "easy":
        mode = Mode.EASY;
        break;
      case "petty":
        mode = Mode.PETTY;
        break;
      case "medium":
        mode = Mode.MEDIUM;
        break;
      case "hard":
        mode = Mode.HARD;
        break;
      case "human":
        mode = Mode.HUMAN;
        break;
      case "online":
        mode = Mode.ONLINE;
        break;
      default:
        mode = Mode.EASY;
        break;
    }
    dispatch<"change">("change", mode);
  }
</script>

<nav>
  <select id="mode" on:change={bubble}>
    <option value="easy">🤖</option>
    <option value="petty">🤖➕</option>
    <option value="medium">🤖❗</option>
    <option value="hard">❗🤖❗</option>
    <option value="human">👨‍💻</option>
    <option value="online" disabled>👨‍💻 / 👨‍💻</option>
  </select>
</nav>

<style>
  nav {
    height: 100%;
    aspect-ratio: 1.75 / 1;
    display: inline-flex;
    flex-direction: column;
  }
  #mode {
    appearance: none;
    height: 100%;
    aspect-ratio: 1;
    border: none;
    outline: none;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
    font-stretch: condensed;
    background-color: var(--secondaryAccent);
    transition: background-color 0.5s;
    text-shadow: 0 0 10px grey;
  }
  #mode > option {
    width: 100%;
    padding: 0;
    font-size: 1.5rem;
    text-align: center;
  }
</style>
