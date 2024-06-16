<script lang="ts">
	export let label = '';
</script>

<div class="mb-2 flex flex-col">
	<div class="text-xs font-semibold">{label}</div>
	<slot class="rounded-md border-0"></slot>
</div>
