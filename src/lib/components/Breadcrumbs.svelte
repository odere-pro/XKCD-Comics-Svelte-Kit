<script lang="ts">
	import lodash from 'lodash';
	import type { ComicResponseData } from '$lib/types';
	import { Icon, Home, ChevronRight } from 'svelte-hero-icons';
	import { comics_1 } from '$lib/__mock__/api/comics/data';
	import { dev } from '$app/environment';

	const { debounce } = lodash;

	export let id: string | undefined = undefined;
	let data: ComicResponseData | undefined = undefined;
	let loaded = false;

	const fetchComicsById = debounce(async (id: string): Promise<void> => {
		if (dev) {
			data = comics_1.data;
			return;
		}

		const url = `/api/comics/${id}`;

		try {
			const response = await fetch(url, {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'GET'
			});

			const json = await response.json();
			loaded = true;
			data = json.data;
		} catch (error: any) {
			console.error(`Fail to fetch last comics: ${url}`, error);
			loaded = true;
		}
	}, 500);

	$: {
		if (id && !loaded) {
			fetchComicsById(id);
		} else {
			data = undefined;
		}
	}
</script>

<nav class="breadcrumbs flex h-5" aria-label="Breadcrumb">
	<ol role="list" class="flex">
		<li class="m-0 flex items-center gap-1">
			<a href="/" class="flex w-full items-center gap-1 text-gray-400 hover:text-gray-500">
				<Icon src={Home} class="h-5" aria-hidden="true" />
				<span>Home</span>
			</a>
		</li>

		{#if data?.title}
			<li class="m-0 flex items-center gap-1">
				<Icon src={ChevronRight} class="h-5 w-auto text-gray-400" aria-hidden="true" />
				<a
					href={`/comics/${data?.num}`}
					class="text-sm font-medium text-gray-500 hover:text-gray-700"
					aria-current={'page'}
				>
					{data.title}
				</a>
			</li>
		{/if}
	</ol>
</nav>
