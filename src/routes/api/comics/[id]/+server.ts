import { error } from '@sveltejs/kit';
import { fetchComicsById } from '$lib/api.server';
import { json } from '@sveltejs/kit';

export async function GET(request) {
	const { id } = request.params;
	const data = await fetchComicsById(id);

	if (!data) {
		throw error(404, 'Not found comics');
	}

	return json({ data }, { status: 200 });
}
