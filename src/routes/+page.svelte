<script>
	import ChatBody from '$lib/chat/ChatBody.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../../static/styles.css';
</script>

<div id="container">
	<Header />
	<ChatBody />
</div>

<style global>
	#container {
		margin: 20px auto;
		min-width: 300px;
		width: 80%;
		max-width: 768px;
	}
	@media (min-width: 768px) {
		#container {
			width: 768px;
		}
	}
</style>
