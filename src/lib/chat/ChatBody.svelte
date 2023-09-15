<script lang="ts">
	import { onMount } from 'svelte';
	import ChatBubble from './ChatBubble.svelte';
	import InputField from './InputField.svelte';
	import Decision from './Decision.svelte';
	import type { Message } from '$lib/utils/Types';

	let messages: Message[] = [{ text: 'Welcome to the Decision Maker App!', user: 'app' }];

	const addMessage = (text: string, user: string, delay: number) => {
		setTimeout(() => {
			messages = [...messages, { text, user }];
		}, delay);
	};
	let choice1 = '';
	let choice2 = '';
	let showInput1 = true;
	let showInput2 = false;
	let decision = '';

	const handleInputSubmit = (inputValue: string) => {
		if (showInput1) {
			choice1 = inputValue;
			showInput1 = false;
			showInput2 = true;
		} else if (showInput2) {
			choice2 = inputValue;
			showInput2 = false;
			decision = Math.random() < 0.5 ? choice1 : choice2;
		}
		messages = [...messages, { text: inputValue, user: 'user' }];
	};

	onMount(() => {
		addMessage('Let me help you with your decision. Please input your choices below.', 'app', 2000);
	});
</script>

<main id="chat-body">
	{#each messages as message}
		<ChatBubble {message} />
	{/each}

	<!-- {#if showInput1 || showInput2}
		<InputField on:submit={handleInputSubmit} />
	{/if} -->

	{#if decision}
		<Decision {decision} />
	{/if}
</main>

<style>
	#chat-body {
		color: #000;
		font-size: 1.2rem;
		margin: 20px;
		padding: 10px;
		border: 1px solid #fff;
		height: 400px;
		border-radius: 5px;
	}
</style>
