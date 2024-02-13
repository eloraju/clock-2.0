import { redirect, type RequestHandler } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

export const POST: RequestHandler = async (event): Promise<Response> => {
	const data = await event.request.json();
	console.log(JSON.stringify(data));
	const res = await fetch(`${PUBLIC_API_URL}/game`, { body: JSON.stringify(data), method: 'POST' });
	if (!res.ok) {
		console.log(res.statusText, '======', await res.text());
	}
	const { id } = await res.json();
	return new Response(JSON.stringify({ id }), { status: 200 });
};
