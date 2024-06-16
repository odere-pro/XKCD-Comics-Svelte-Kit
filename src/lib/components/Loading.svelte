<div class="spinner"></div>

<style>
	:root {
		--spinner-bg: #000;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--spinner-bg: #fff;
		}
	}

	.spinner {
		width: 48px;
		height: 48px;
		border: 5px solid var(--spinner-bg);
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
