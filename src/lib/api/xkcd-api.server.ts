import type { ComicResponseData } from '$lib/types';
import { NEXT_PUBLIC_API_URL } from '$env/static/private';

export async function fetchLastComics(): Promise<ComicResponseData | undefined> {
	const url = `${NEXT_PUBLIC_API_URL}/info.0.json`;

	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'GET'
		});

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(`Fail to fetch last comics: ${url}`, error);
		return;
	}
}

export async function getLastComicsID(): Promise<number> {
	const url = `${NEXT_PUBLIC_API_URL}/info.0.json`;

	try {
		const data = await fetchLastComics();

		return data?.num || 1;
	} catch (error) {
		console.error(`Fail to fetch last comics: ${url}`, error);
		return 1;
	}
}

export async function fetchComicsById(id: string): Promise<ComicResponseData | undefined> {
	const url = `${NEXT_PUBLIC_API_URL}/${id}/info.0.json`;

	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'GET'
		});

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(`Fail to fetch last comics: ${url}`, error);
		return;
	}
}

export async function fetchComicsByIds(ids: string[]): Promise<ComicResponseData[] | undefined> {
	if (!ids.length) {
		return;
	}

	try {
		const data = (await Promise.all(ids.map((id) => fetchComicsById(id)))).filter(
			Boolean
		) as ComicResponseData[];

		return data;
	} catch (error) {
		console.error(`Fail to fetch comics batch: ${ids}`, error);
		return;
	}
}
