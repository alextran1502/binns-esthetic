import type { Handle } from '@sveltejs/kit';

const CANONICAL_HOST = 'binnsesthetic.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.url.hostname.toLowerCase();

	if (host === WWW_HOST) {
		const redirectUrl = new URL(event.url);
		redirectUrl.protocol = 'https:';
		redirectUrl.hostname = CANONICAL_HOST;
		return Response.redirect(redirectUrl.toString(), 308);
	}

	return resolve(event);
};
