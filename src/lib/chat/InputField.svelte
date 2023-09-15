<script>
	import { createEventDispatcher } from 'svelte';

	let inputValue = '';
	const dispatch = createEventDispatcher();

	const handleSubmit = () => {
		if (inputValue.trim() !== '') {
			dispatch('submit', inputValue);
			inputValue = '';
		}
	};
</script>

<div class="input-field">
	<input type="text" bind:value={inputValue} placeholder="Type your message..." />
	<button on:click={handleSubmit}>Submit</button>
</div>

<style>
	.input-field {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 20px;
	}

	input {
		flex-grow: 1;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
