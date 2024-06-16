import { error } from '@sveltejs/kit';
import { getLastComicsID, fetchComicsByIds } from '$lib/api/xkcd-api';
import { getBatchIds } from '$lib/utils';

const ONE_BATCH = 12;

interface ParseSearchParamsProps {
	batch: string;
	end: string;
	start: string;
	lastID: number;
}

const parseSearchParams = (
	props: ParseSearchParamsProps
): {
	batch: number;
	end: number;
	start: number;
} => {
	let batch = ONE_BATCH;
	let end = props.lastID;
	let start;

	if (props.batch) {
		try {
			batch = parseInt(props.batch, 10);
		} catch (e) {
			console.warn('Failed to parse "batch" searchParams', e);
		}
	}

	batch = batch > ONE_BATCH ? ONE_BATCH : batch;

	if (props.end) {
		try {
			end = parseInt(props.end, 10);
		} catch (e) {
			console.warn('Failed to parse "batch" searchParams', e);
		}
	}

	end = end - ONE_BATCH <= 0 ? ONE_BATCH : end;
	start = end - batch + 1;

	if (props.start) {
		try {
			start = parseInt(props.start, 10);
		} catch (e) {
			console.warn('Failed to parse "batch" searchParams', e);
		}
	}

	// Make sure that window is no more then batch
	if (start + batch < end) {
		end = start + batch;
	}

	return {
		batch,
		end,
		start
	};
};

export async function load({ url: { searchParams } }) {
	let lastID = 1;

	try {
		lastID = await getLastComicsID();
	} catch (e) {
		console.error(e);
		throw error(500, 'Failed to get the last comics ID');
	}

	const { start, end, batch } = parseSearchParams({
		start: searchParams.get('start') || '',
		end: searchParams.get('end') || '',
		batch: searchParams.get('batch') || '',
		lastID
	});
	const nextStart = start - batch;
	const nextEnd = end - batch;
	const prevStart = start + batch;
	const prevEnd = end + batch;
	const ids = getBatchIds(start, end);
	let data = await fetchComicsByIds(ids);

	if (!data) throw error(404);

	data = data.reverse();

	return {
		items: data,
		nextStart,
		nextEnd,
		prevStart,
		prevEnd,
		batch: batch > ONE_BATCH ? ONE_BATCH : batch,
		lastID
	};
}
