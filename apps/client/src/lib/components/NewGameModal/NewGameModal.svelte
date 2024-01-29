<script lang="ts">
  import logo from "$lib/images/logo.png";
  import DurationPicker from "./DurationPicker.svelte";
  import GameDuration from "./GameDuration.svelte";
  import Player from "./Player.svelte";

  let playerA: string;
  let playerB: string;
  let startingPlayer = 1;
  let armyA: string;
  let armyB: string;
  let duration = 1.5 * 60 * 60; // 1.5h
</script>

<form method="post" action="/game">
  <div class="main">
    <img src={logo} alt="THE LOGO!" />

    <div class="data-container">
      <h3>1. Type in player names</h3>
      <div class="data">
        <Player bind:name={playerA} {startingPlayer} playerId={1} />
        <Player bind:name={playerB} {startingPlayer} playerId={2} />
      </div>
    </div>

    <div class="data-container">
      <h3>2. Select armies</h3>
      <div class="data"></div>
    </div>

    <div class="data-container">
      <h3>3. Adjust game length</h3>
      <DurationPicker bind:duration />
    </div>
  </div>
</form>

<style>
  .main {
    display: flex;
    flex-direction: column;
    width: 580px;
    border: 2px solid black;
    border-radius: 20px;
    border: 2px solid var(--green-radient, #00d2b6);
    padding: 24px 64px;
    background: #040d12;
    gap: 40px;
    margin-top: 64px;
  }

  h3 {
    color: white;
    font-size: 18px;
  }

  .data-container {
    display: flex;
    flex-direction: column;
  }

  .data {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
  }

  img {
    width: 100%;
  }
</style>
