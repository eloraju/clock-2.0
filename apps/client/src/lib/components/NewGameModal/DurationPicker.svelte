<script lang="ts">
  export let duration = 1.5 * 60 * 60; // 1.5h

  $: hours = Math.floor(duration / 3600);
  $: minutes = Math.floor(duration / 60) % 60 || "00";

  function add15min() {
    duration = duration + 15 * 60;
  }

  function subtract15min() {
    if (duration <= 0) {
      duration = 0;
    } else {
      duration = duration - 15 * 60;
    }
  }
</script>

<div class="container">
  <span class="btn-wrapper sub">
    <button type="button" on:click={subtract15min}>- 15 min</button>
  </span>
  <span style="margin: 0 24px;">
    <span class="time-text">{hours}h</span>
    <span class="time-text">{minutes}min</span>
  </span>
  <span class="btn-wrapper add">
    <button type="button" on:click={add15min}>+ 15 min</button>
  </span>
  <input type="number" name="duration" hidden bind:value={duration} />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .time-text {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }

  button {
    appearance: unset;
    border: none;
    border-radius: 99px;
    background: #040d12;
    color: white;
    font-size: 16px;
    margin: 2px;
    position: relative;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    border-radius: 99px;
  }

  .add {
    background: linear-gradient(#99d78f, #50a443);
  }

  .sub {
    background: linear-gradient(#ff6464, #f10000);
  }

  input {
    display: none;
  }
</style>
