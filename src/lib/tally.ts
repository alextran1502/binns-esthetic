const TALLY_BASE_URL = 'https://tally.so';

export type TallyUrls = {
	formId: string;
	configured: boolean;
	responseUrl: string;
	embedUrl: string;
};

export type TallyForms = {
	waitlist: TallyUrls;
	appointment: TallyUrls;
};

export function extractFormId(reference?: string): string {
	const value = reference?.trim();
	if (!value) return '';

	const urlMatch = value.match(/tally\.so\/(?:r|embed|forms)\/([A-Za-z0-9_-]+)/i);
	if (urlMatch?.[1]) return urlMatch[1];

	const rawMatch = value.match(/^[A-Za-z0-9_-]+$/);
	return rawMatch?.[0] ?? '';
}

function buildUrls(formId: string): TallyUrls {
	if (!formId) {
		return {
			formId: '',
			configured: false,
			responseUrl: '',
			embedUrl: ''
		};
	}

	return {
		formId,
		configured: true,
		responseUrl: `${TALLY_BASE_URL}/r/${formId}`,
		embedUrl: `${TALLY_BASE_URL}/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
	};
}

export function buildTallyForms(
	waitlistReference?: string,
	appointmentReference?: string
): TallyForms {
	const waitlistId = extractFormId(waitlistReference);
	const appointmentId = extractFormId(appointmentReference) || waitlistId;

	return {
		waitlist: buildUrls(waitlistId),
		appointment: buildUrls(appointmentId)
	};
}
