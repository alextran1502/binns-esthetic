import { buildTallyForms } from '$lib/tally';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ platform }) => {
	const platformEnv = (platform?.env as Record<string, string | undefined> | undefined) ?? {};

	const waitlistReference =
		platformEnv.PUBLIC_TALLY_WAITLIST_FORM ?? process.env.PUBLIC_TALLY_WAITLIST_FORM ?? '';
	const appointmentReference =
		platformEnv.PUBLIC_TALLY_APPOINTMENT_FORM ?? process.env.PUBLIC_TALLY_APPOINTMENT_FORM ?? '';

	return {
		tallyForms: buildTallyForms(waitlistReference, appointmentReference)
	};
};
