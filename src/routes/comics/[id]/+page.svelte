<script lang="ts">
	import Comics from '$lib/components/Comics.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
	const { totalPages, ...rest } = data;
	let comicsData = { ...rest, withDetails: true };
</script>

<Pagination currentPage={data.num} {totalPages} />
<Comics data={comicsData} />
