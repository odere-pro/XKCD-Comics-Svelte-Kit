<script>
	import BreadCrumbs from '$lib/components/Breadcrumbs.svelte';
	import '../app.css';
	import { page } from '$app/stores';
</script>

<header class="content-bg w-full max-w-5xl px-4 md:px-8 lg:px-16">
	<div
		class="flex flex-col-reverse items-start justify-between gap-2 border-b border-gray-400 py-4 text-sm md:flex md:flex-row md:items-center md:gap-0 md:text-base"
	>
		<BreadCrumbs id={$page.params.id} />
		<h1>
			XKCD - A webcomic
			<span class="hidden md:inline"> of romance, sarcasm, math, and language </span>
		</h1>
	</div>
</header>
<main
	class="content-bg flex h-fit w-full max-w-5xl grow flex-col items-center px-4 pb-4 md:px-8 md:pb-8 lg:px-16 lg:pb-16"
>
	<slot />
</main>
