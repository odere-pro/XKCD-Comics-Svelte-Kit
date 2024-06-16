<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { ComicResponseData } from '$lib/types';
	import { get4x3ImageHeight } from '$lib/utils/image-utils';
	import { createLink } from '$lib/utils/xkcd-utils';
	import DataField from '$lib/components/DataField.svelte';

	const DEFAULT_WIDTH = 512;
	interface ComicsProps extends ComicResponseData {
		width?: number;
		height?: number;
		withDetails?: boolean;
		withImageLink?: boolean;
	}

	export let data: ComicsProps | undefined = undefined;
	let {
		month,
		num,
		link,
		year,
		news,
		safe_title,
		transcript,
		alt,
		img,
		title,
		day,
		width = DEFAULT_WIDTH,
		height = get4x3ImageHeight(DEFAULT_WIDTH),
		withDetails = false,
		withImageLink = false
	} = data || {};

	let imageCreationDate: string | undefined = undefined;

	if (year && month && day) {
		imageCreationDate = new Date(
			parseInt(year, 10),
			parseInt(month, 10) - 1,
			parseInt(day, 10)
		).toLocaleDateString();
	}
</script>

{#if data}
	<div class="flex w-full flex-col gap-y-4">
		<a
			href={withImageLink ? `/comics/${num}` : '#'}
			class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
		>
			<img src={img} {alt} {width} {height} class="object-contain group-hover:opacity-75" />
			<span class="sr-only">View details for {title || safe_title}</span>
		</a>
		{#if withDetails}
			{#if imageCreationDate}
				<DataField label="Created at">
					<p class="text-sm">{imageCreationDate}</p>
				</DataField>
			{/if}
			{#if title}
				<DataField label="Title">
					<p class="text-sm">{title}</p>
				</DataField>
			{/if}
			{#if safe_title}
				<DataField label="Order number">
					<p class="text-sm">{num}</p>
				</DataField>
			{/if}
			{#if num}
				<DataField label="Link to post">
					<a class="text-sm" href={createLink({ num, link, api_url: PUBLIC_API_URL })}>
						{createLink({ num, link, api_url: PUBLIC_API_URL })}
					</a>
				</DataField>
			{/if}
			{#if news}
				<DataField label="News">
					<p class="text-sm">{news}</p>
				</DataField>
			{/if}
			{#if transcript}
				<DataField label="Transcript">
					<p class="text-sm">{transcript}</p>
				</DataField>
			{/if}
		{/if}
	</div>
{/if}
