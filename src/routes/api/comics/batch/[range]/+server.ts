import { error } from '@sveltejs/kit';
import { fetchComicsByIds } from '$lib/api/xkcd-api';
import { json } from '@sveltejs/kit';
import { getBatchIds } from '$lib/utils';

// Expect to get 1-12, 13-24, ..., etc
const parseRage = (range: string): [number, number] | undefined => {
	const [startStr, endStr] = range.split('-');

	if (!startStr || !endStr) {
		return;
	}

	try {
		const start = parseInt(startStr, 10);
		const end = parseInt(endStr, 10);
		return [start, end];
	} catch (error) {
		console.error('Invalid range param, example: 1-12, 13-24', error);
	}
};

export async function GET(request) {
	const { range } = request.params;
	const result = parseRage(range);

	if (!result) {
		throw error(500, 'Invalid range param, example: 1-12, 13-24');
	}

	const [start, end] = result;
	const ids = getBatchIds(start, end);

	const data = await fetchComicsByIds(ids);

	if (!data?.length) {
		throw error(404, 'Not found comics');
	}

	return json({ data }, { status: 200 });
}
