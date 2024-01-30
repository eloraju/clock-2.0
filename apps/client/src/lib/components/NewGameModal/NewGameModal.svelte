<script lang="ts">
  import logo from "$lib/images/logo.png";
  import RadioButton from "../shared/RadioButton.svelte";
  import ArmyPicker from "./components/ArmyPicker.svelte";
  import DurationPicker from "./components/DurationPicker.svelte";
  import NameInput from "./components/NameInput.svelte";
  import StartGameBtn from "./components/StartGameBtn.svelte";

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
      <h1>1. Type in player names</h1>
      <div class="data">
        <div class="name-starter">
          <NameInput bind:name={playerA} playerId={1} />
          <RadioButton {startingPlayer} playerId={1} />
        </div>
        <div class="name-starter">
          <NameInput bind:name={playerB} playerId={2} />
          <RadioButton {startingPlayer} playerId={2} />
        </div>
      </div>
    </div>

    <div class="data-container">
      <h1>2. Select armies</h1>
      <div class="data">
        <ArmyPicker name="army1" playerId={1} bind:value={armyA} />
        <ArmyPicker name="army2" playerId={2} bind:value={armyB} />
      </div>
    </div>

    <div class="data-container">
      <h1>3. Adjust game length</h1>
      <DurationPicker bind:duration />
    </div>
    <div class="start-wrapper">
      <StartGameBtn />
    </div>
  </div>
</form>

<style lang="scss">
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

  h1 {
    color: white;
    font-size: 18px;
    font-weight: 700;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .data {
      display: flex;
      flex-direction: row;
      gap: 16px;
      justify-content: space-between;

      .name-starter {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }

  .start-wrapper {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
  }
</style>
