<script lang="ts">
  import TextInput from "$components/shared/TextInput.svelte";
  export let playerId = 1;
  export let name: string;
</script>

<TextInput label={`Player ${playerId}`} bind:value={name} required />
