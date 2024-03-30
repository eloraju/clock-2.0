<script lang="ts">
	export let text: string;
</script>

<button class="btn">{text}</button>

<style lang="scss">
	.btn {
		border: solid 2px white;
		border-radius: 99px;
		padding: 12px 24px;
		background-color: #0000;
		color: white;
		font-size: 16px;
		font-family: 'Roboto Mono', sans-serif;
		cursor: pointer;
		transition: background-color 0.2s;
		&:hover {
			background-color: #005f54;
		}
	}
</style>
