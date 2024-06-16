<script lang="ts">
	import { onMount } from 'svelte';
	import clsx from 'clsx';
	import { Icon, ArrowLongLeft, ArrowLongRight } from 'svelte-hero-icons';
	import { getLastComicsID } from '$lib/api/xkcd-api';
	import { getPaginationItems } from '$lib/utils/pagination-utils';
	import { dev } from '$app/environment';

	export let currentPage: number = 1;
	export let totalPages: number | undefined = undefined;
	const defaultPageLinkCN = 'border-transparent text-gray-500 hover:text-gray-700 ';
	const highlightedPageLinkCN = 'border-indigo-500 text-indigo-600';
	let prevIdx = 1;
	let nextIdx = 1;
	let pages: number[] = [];

	onMount(async () => {
		if (dev) {
			totalPages = totalPages || 10;
		} else {
			totalPages = await getLastComicsID();
		}
		pages = getPaginationItems({ currentPage, totalPages });

		prevIdx = currentPage - 1 < 1 ? 1 : currentPage - 1;
		nextIdx = currentPage + 1 > totalPages ? totalPages : currentPage + 1;
	});
</script>

<nav class="flex w-full flex-row items-center justify-between gap-0 md:gap-2 lg:flex-row">
	<div class="flex h-8 flex-1 md:h-10">
		<a
			href={`/comics/${prevIdx}`}
			class={clsx(
				'inline-flex items-center border-t-2 border-transparent pl-1 pt-2 text-xs font-medium text-gray-500 hover:text-gray-700 md:pt-4 md:text-sm',
				currentPage === 1 && 'hidden'
			)}
		>
			<Icon src={ArrowLongLeft} class="h-5 w-5 text-gray-400 md:mr-3" aria-hidden="true" />
			<span class="hidden md:inline">Previous</span>
		</a>
	</div>

	<div class="flex h-8 md:h-10">
		{#each pages as pageIdx}
			<a
				href={`/comics/${pageIdx}`}
				class={clsx(
					'inline-flex items-center border-t-2 px-2 pt-2 text-xs font-medium md:px-4 md:pt-4 md:text-sm',
					pageIdx === currentPage ? highlightedPageLinkCN : defaultPageLinkCN
				)}
			>
				{pageIdx || '...'}
			</a>
		{/each}
	</div>

	<div class="flex h-8 flex-1 justify-end md:h-10">
		<a
			href={`/comics/${nextIdx}`}
			class={clsx(
				'inline-flex items-center border-t-2 border-transparent pl-1 pt-2 text-xs font-medium text-gray-500 hover:text-gray-700 md:pt-4 md:text-sm',
				currentPage === totalPages && 'hidden'
			)}
		>
			<span class="hidden md:inline">Next</span>

			<Icon src={ArrowLongRight} class="h-5 w-5 text-gray-400 md:ml-3" aria-hidden="true" />
		</a>
	</div>
</nav>
