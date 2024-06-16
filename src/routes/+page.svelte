<script lang="ts">
	import Comics from '$lib/components/Comics.svelte';
	import { Icon, ArrowLongUp, ArrowLongDown } from 'svelte-hero-icons';

	export let data;
</script>

{#if data.prevStart < data.lastID}
	<a class="mt-8 inline-flex" href={`/?start=${data.prevStart}&end=${data.prevEnd}`}>
		<Icon src={ArrowLongUp} class="h-5 w-5 text-gray-400 md:mr-3" aria-hidden="true" />
		<span>Show previous</span>
	</a>
{/if}

<ul
	role="list"
	class="image-grid mt-8 grid w-full grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
>
	{#each data.items as item}
		<li>
			<Comics data={{ ...item, withImageLink: true }} />
		</li>
	{/each}
</ul>

{#if data.nextEnd > 1}
	<a
		class="mt-8 inline-flex"
		href={`/?start=${data.nextStart}&end=${data.nextEnd}&batch=${data.batch}`}
	>
		<Icon src={ArrowLongDown} class="h-5 w-5 text-gray-400 md:mr-3" aria-hidden="true" />
		<span>Show more</span>
	</a>
{/if}
