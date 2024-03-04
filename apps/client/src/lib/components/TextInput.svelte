<script lang="ts">
	export let label: string;
	export let value: string;
	export let required = false;
	export let name: string;
</script>

<div class="container">
	<label for="name_input">{value || label}</label>
	<input {required} bind:value type="text" id="name_input" {name} />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	input {
		appearance: none;
		background-color: transparent;
		border: none;
		padding: 0 1em 0 0;
		margin: 0;
		width: 100%;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		line-height: inherit;
		border-radius: 2px;
		border: 1px solid #9a9a9a;
		background: #fff;
		padding: 8px;
	}
</style>
