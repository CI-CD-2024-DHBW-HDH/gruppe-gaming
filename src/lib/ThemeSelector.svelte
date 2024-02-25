<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { themes } from "../logic/theme";

  const dispatch = createEventDispatcher();
  let selectedTheme = 0;

  onMount(() => {
    dispatch<"changed">("changed", themes[selectedTheme]);
  });

  function changeTheme() {
    selectedTheme = (selectedTheme + 1) % themes.length;
    dispatch<"changed">("changed", themes[selectedTheme]);
  }
</script>

<button title={themes[selectedTheme].name} on:click={() => changeTheme()}
  >🎨</button
>

<style>
  button {
    height: 100%;
    aspect-ratio: 1.75 / 1;
    display: block;
    outline: none;
    font-size: 2rem;
    border: none;
    background-color: var(--secondaryAccent);
    text-shadow: 0 0 10px grey;
    transition: background-color 0.5s;
    cursor: pointer;
  }
</style>
