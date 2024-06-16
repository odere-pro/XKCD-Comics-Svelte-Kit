import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getLastComicsID } from '$lib/api/xkcd-api';

export async function load() {
	let id = 1;

	try {
		id = await getLastComicsID();
	} catch (e) {
		console.error(e);
		throw error(500, 'Failed to get the last comics ID');
	}

	if (id) {
		redirect(301, `/comics/${id}`);
	}
}
