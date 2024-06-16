import { createLink } from './xkcd-utils';
import { describe, expect, test } from 'vitest';

describe('@/utils/xkcd-utils', () => {
	describe('createLink', () => {
		const link = 'http://dot.com';
		const num = 1;

		test('Expect to return the link if the link is provided', () => {
			const result = createLink({ num, link });
			expect(result).toBe(link);
		});

		test('Expect to return empty string id PUBLIC_API_URL not set and no link provided', () => {
			const result = createLink({ num, link: undefined });
			expect(result).toBe('');
		});

		test('Expect to generate a link', () => {
			const result = createLink({ num, link: undefined, api_url: 'https://xkcd.com/' });
			expect(result).toBe('https://xkcd.com/1');
		});
	});
});
