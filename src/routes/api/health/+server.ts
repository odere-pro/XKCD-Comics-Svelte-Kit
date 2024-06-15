import { json } from '@sveltejs/kit';

export function GET() {
	return json({ data: 'OK' }, { status: 200 });
}
