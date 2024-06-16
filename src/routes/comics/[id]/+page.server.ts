import { error } from '@sveltejs/kit';
import { fetchComicsById, getLastComicsID } from '$lib/api/xkcd-api';

export async function load({ params }) {
	const { id } = params;
	const data = await fetchComicsById(id);
	const totalPages = await getLastComicsID();

	if (!data) throw error(404);

	return {
		...data,
		totalPages
	};
}
