<script lang="ts">
	import type { Message } from '$lib/utils/Types';
	export let message: Message;
</script>

<div class="chat-bubble {message.user}">
	{message.text}
</div>

<style>
	.chat-bubble {
		border: 2px solid #f1f0f0;
		border-radius: 20px;
		padding: 8px 12px;
		margin: 8px;
		width: 50%;
		height: 48px;
		display: flex;
		justify-content: start;
		align-items: center;
		color: greenyellow;
	}
	.user {
		align-self: flex-end;
	}

	.app {
		align-self: flex-start;
	}
	@media (max-width: 768px) {
		.chat-bubble {
			height: 78px;
			width: 70%;
		}
	}
</style>
