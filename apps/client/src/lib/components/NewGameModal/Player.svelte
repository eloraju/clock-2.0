<script lang="ts">
  import TextInput from "../shared/TextInput.svelte";
  export let playerId = 1;
  export let name: string;
  export let startingPlayer: number;
</script>

<div class="container">
  <TextInput label={`Player${playerId}`} bind:value={name} required />
  <label>
    <input
      type="radio"
      bind:group={startingPlayer}
      name="startingPlayer"
      value={playerId}
    />
    Starting player
  </label>
</div>

<style>
  h3 {
    color: white;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .wrapper {
    display: flex;
    gap: 16px;
    justify-content: stretch;
  }

  label {
    color: white;
    font-weight: 400;
  }
</style>
