<script lang="ts">
	 import { base } from '$app/paths';
</script>

<header id="app-header">
	<img src="{base}/decision-logo.png" alt="decision logo" class="logo" />
	<h1>Decision Maker</h1>
</header>

<style>
	#app-header {
		padding: 20px;
		height: 60px;
		display: flex;
		color: #000;
		justify-content: space-between;
		align-items: center;
		margin: 20px;
		background-color: lightgray;
		border-radius: 5px;
	}
	#app-header > h1 {
		font-size: 34px;
		font-weight: bold;
	}
	.logo {
		width: 90px;
		height: 78px;
	}
	@media (max-width: 768px) {
		#app-header {
			display: flex;
			flex-direction: column;
			height: 100px;
		}
		.logo {
			width: 60px;
		}
	}
</style>
