export const createLink = (props: { num: number; link?: string; api_url?: string }): string => {
	const { num, link, api_url = '' } = props;
	if (link) {
		return link;
	}

	if (!api_url) {
		return '';
	}

	return `${api_url}${num}`;
};
