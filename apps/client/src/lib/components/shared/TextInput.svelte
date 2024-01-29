<script lang="ts">
  export let label: string;
  export let value: string;
  export let required = false;
</script>

<div class="container">
  <label for="name_input">{label}</label>
  <input {required} bind:value type="text" id="name_input" />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  label {
    color: white;
  }
</style>
