import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();
	
	// Protect this route - require authentication
	if (!session?.user) {
		throw redirect(303, '/');
	}
	
	return {
		session
	};
};
