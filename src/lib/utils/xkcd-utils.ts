export const createLink = (props: { num: number; link?: string }): string => {
	const { num, link } = props;
	if (link) {
		return link;
	}

	const VITE_PUBLIC_API_URL = process.env.VITE_PUBLIC_API_URL;

	if (!VITE_PUBLIC_API_URL) {
		return '';
	}

	return `${process.env.VITE_PUBLIC_API_URL}${num}`;
};
