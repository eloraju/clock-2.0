<script lang="ts">
	import pauseIcon from '$lib/icons/pause.svg';
	import playIcon from '$lib/icons/play.svg';
	export let icon: 'play' | 'pause' = 'pause';
	const iconSrc = icon === 'play' ? playIcon : pauseIcon;
</script>

{#if icon}
	<button class="btn">
		<img class="btn-icon" src={iconSrc} alt="" />
	</button>
{/if}

<style lang="scss">
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 2px white;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.2s;
		background-color: #0000;
		width: 48px;
		height: 48px;
		&:hover {
			background-color: #005f54;
		}
		.btn-icon {
			width: 18px;
			height: 18px;
		}
	}
</style>
